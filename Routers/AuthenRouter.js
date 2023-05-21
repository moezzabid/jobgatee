const router=require("express").Router()
const AuthenControler=require("../Controler/AuthentificationControler")
router.post("/login",AuthenControler.login)
router.post("/logout",AuthenControler.logout)
module.exports=router



