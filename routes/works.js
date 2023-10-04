const express = require ("express") 
const router = express.Router()
const workcontrollers = require("../controllers/works")

router.post("/new", workcontrollers.CREATE)
router.get("/:id", workcontrollers.READ_BY_ID)
router.get("/", workcontrollers.READ)
//router.patch("/new", workcontrollers.UPDATE)
//router.delete("/new", workcontrollers.DELETE)


module.exports = router
