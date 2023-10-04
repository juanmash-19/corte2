const express = require ("express") 
const router = express.Router()
const usercontrollers = require("../controllers/users")

router.post("/new", usercontrollers.CREATE)
//router.get("/:id", usercontrollers.READ_BY_ID)
router.get("/", usercontrollers.READ)
//router.patch("/new", workcontrollers.UPDATE)
//router.delete("/new", workcontrollers.DELETE)


module.exports = router