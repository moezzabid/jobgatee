const mongoose=require("mongoose")
const UserM = require("./UserModel")
const schemaCandidat=new mongoose.Schema({
    CV:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
    },
})
const candidat=UserM.discriminator("candidat",schemaCandidat)
module.exports=mongoose.model("candidat")