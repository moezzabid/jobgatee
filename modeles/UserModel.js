const mongoose=require("mongoose")
const baseOption={
    discriminatorkey:"itemtype",
    collection:"User"
}
const schemaUser=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    adresse:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },

}, baseOption)
module.exports=mongoose.model("User",schemaUser)