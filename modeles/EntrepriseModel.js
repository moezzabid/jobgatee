const mongoose=require("mongoose")
const UserModel = require("./UserModel")
const schemaEntreprise=new mongoose.Schema({
    NomEntreprise:{
        type:String,
        required:true,
    },
    siteweb:{
        type:String,
        required:true,
    },
    specialite:{
        type:String,
        required:true,
    }
})
const Entreprise=UserModel.discriminator("Entreprise",schemaEntreprise)
module.exports=mongoose.model("Entreprise")