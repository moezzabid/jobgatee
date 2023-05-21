const router=require("express").Router()
const candidatcontroler=require("../Controler/CandidatControler")
router.post("/",candidatcontroler.registre)
router.get("/cand",candidatcontroler.getAll)
router.put("/:id",candidatcontroler.update)
router.delete("/:id",candidatcontroler.delete)
router.get("/:id",candidatcontroler.getById)



module.exports=router