const userModel=require("../modeles/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
let refreshtokens=[]
const T_Token=process.env.T_SECRET
const R_TOKEN=process.env.R_SECRET
const generateacesstoken=(user)=>{
    return jwt.sign({id:user.id},T_Token,{expiresIn:"30m"} )

}   
const refreshacesstoken=(user)=>{
    return jwt.sign({id:user.id},R_TOKEN,{expiresIn:"1h"})
}
module.exports={
    login:async(req,res)=>{
        user=await userModel.findOne({email:req.body.email})
        if(!user){
             
            res.status(400).json({
                sucess:false,
            message:"email or password invalid"
        })
        }
        else{
            validpassword=bcrypt.compareSync(req.body.password,user.password)
            if(!validpassword){
            res.status(400).json({
                sucess:false,
            message:"email or password invalid"
            })

        }
        else{
            const accesstoken=generateacesstoken(user)
            const refreshToken=refreshacesstoken(user)
            refreshtokens.push(refreshToken)

            res.status(201).json({
                sucess:true,
                message:"welcome",
                data:user,
                token:accesstoken,
                refreshToken:refreshToken
            })
        }
    } 

    
},
logout:async(req,res)=>{
    const refreshToken=req.body.token
    refreshtokens=refreshtokens.filter((token)=>token !== refreshToken)
res.status(201).json({
    message:"You're logged out"
})
}
}