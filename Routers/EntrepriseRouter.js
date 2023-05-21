const router=require("express").Router()
const entreprisecontroler=require("../Controler/EntrepriseControler")
router.post("/",entreprisecontroler.registre)
router.get("/entr",entreprisecontroler.getAll)
router.put("/:id",entreprisecontroler.update)
router.delete("/:id",entreprisecontroler.delete)
router.get("/:id",entreprisecontroler.getById)


module.exports=router