const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/JobGate",(err)=>{
    if(!err){
        console.log("mongodb connection")
    }
    else{
        console.log("error connecting to mongo")
    }
})