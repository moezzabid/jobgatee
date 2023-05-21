const candidatModel=require("../modeles/candidatModel")
const bcrypt=require("bcrypt")
const nodemailer=require("nodemailer")
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3ee284c16f0e7e",
      pass: "f9caba43bffb2d"
    }
  });
module.exports={
registre:async(req,res)=>{
    const salt=bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hashSync(req.body.password, parseInt(salt))
    const candidat=new candidatModel({
        ...req.body,
        password:hashpassword
    })
    await candidat.save(req.body,(err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
            
        }
        else{
              transport.sendMail({
                from:"<candidat@gmail.com>",
                to:item.email,
                subject:"email confirmation"+item.name,
                text:"welcome",
              })
            res.status(201).json({
                sucess:true,
                message:"sucess",
                data:item
            })

        }
    })
    },
    getAll:async(req,res)=>{
      await candidatModel.find().exec((err,item)=>{
          if(err){
              res.status(400).json({
                  sucess:false,
                  message:failed,err
              })

          }else{
              res.status(200).json({
                  sucess:true,
                  message:"sucess",
                  data:item,
              })
          }
      })
  },
  update:async(req,res)=>{
    await candidatModel.findByIdAndUpdate(req.params.id,req.body).exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"sucess",
                data:item,
            })
        }
    })
},
delete:async(req,res)=>{
    await candidatModel.findOneAndDelete(req.params.id).exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"delete",
                
            })
        }
    })
},
getById:async(req,res)=>{
    await candidatModel.findById(req.params.id).exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"sucess",
                date:item,
            })
        }
    })
}
}



