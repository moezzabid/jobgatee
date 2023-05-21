const express=require("express")
const db=require("./db")
require("dotenv").config()
const app=express()
const port=7000
app.use(express.json())

const AdminRouter=require("./Routers/AdminRouter")
app.use("/admin",AdminRouter)

const EntrepriseRouter=require("./Routers/EntrepriseRouter")
app.use("/entreprise",EntrepriseRouter)

const candidatRouter=require("./Routers/CandidatRouter")
app.use("/candidat",candidatRouter)

const AuthenRouter=require("./Routers/AuthenRouter")
app.use("/auth",AuthenRouter)

const offreRouter=require("./Routers/offreRouter")
app.use("/offre",offreRouter)



app.listen(port,()=>{
    console.log("http://localhost:7000")
})