const router = require("express").Router();
const userContro = require("../controller/userController");

router.post("/save", userContro.add);
// router.post("/remove",userContro.deleteDetails)
module.exports = router;
