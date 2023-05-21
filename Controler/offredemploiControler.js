const offredemploiModel=require("../modeles/offredemploiModel")
  module.exports={
   create:async(req,res)=>{  
    const offredemploi=new offredemploiModel(req.body)
    await offredemploi.save(req.body,(err,item)=>{

            if(err){
                res.status(400).json({
                    sucess:false,
                    message:"failed",err
                })
            }
            else{
               
                res.status(201).json({
                    sucess: true,
                    message: "sucess",
                    data: item
                })
            }
        })
    },
   getAll:async(req,res)=>{
    await offredemploiModel.find().exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",
                err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"sucess",
                data:item
            })
        }
    })
   },
   update:async(req,res)=>{
    await offredemploiModel.findByIdAndUpdate(req.params.id,req.body).exec((err,item)=>{
        if(err){
              res.status(400).json({
                sucess:false,
                message:"failed",
                err
              })
        }else{
            res.status(200).json({
                sucess:true,
                message:"sucess",
                data:item
            })
        }
    })
   },
   delete:async(req,res)=>{
    await offredemploiModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
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
    await offredemploiModel.findById(req.params.id).exec((err,item)=>{
        if(err){
            res.status(400).json({
                sucess:false,
                message:"failed",err
            })
        }else{
            res.status(200).json({
                sucess:true,
                message:"sucess",
                data:item

            })
        }
    })
   }
  }