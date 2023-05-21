const router=require("express").Router()
const Admincontroler=require("../Controler/AdminControler")
router.post("/",Admincontroler.registre)
router.get("/adm",Admincontroler.getAll)
router.put("/:id",Admincontroler.update)
router.delete("/:id",Admincontroler.delete)
router.get("/:id",Admincontroler.getById)


module.exports=router