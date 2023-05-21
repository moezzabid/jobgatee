const router=require("express").Router()
const offredemploiContrler=require("../Controler/offredemploiControler")
router.post("/",offredemploiContrler.create)
router.get("/all",offredemploiContrler.getAll)
router.put("/:id",offredemploiContrler.update)
router.delete("/:id",offredemploiContrler.delete)
router.get("/:id",offredemploiContrler.getById)


module.exports=router