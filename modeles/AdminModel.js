const mongoose=require("mongoose")
const UserModel = require("./UserModel")
const schemaAdmin=new mongoose.Schema({

})
const Admin=UserModel.discriminator("Admin",schemaAdmin)
module.exports=mongoose.model("Admin")