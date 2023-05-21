const bcrypt=require("bcrypt")
const nodemailer=require("nodemailer");
const EntrepriseModel = require("../modeles/EntrepriseModel");
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
        const hashpassword=await bcrypt.hashSync(req.body.password,parseInt(salt))
        const Entreprise=new EntrepriseModel({
            ...req.body,
            password:hashpassword
        })
    await Entreprise.save(req.body,(err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
        }else{
            transport.sendMail({
                from:"<Entreprise@gmail.com>",
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
        await EntrepriseModel.find().exec((err,item)=>{
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
        await EntrepriseModel.findByIdAndUpdate(req.params.id,req.body).exec((err,item)=>{
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
        await EntrepriseModel.findOneAndDelete(req.params.id).exec((err,item)=>{
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
        await EntrepriseModel.findById(req.params.id).exec((err,item)=>{
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

