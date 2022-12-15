const router = require("express").Router();
const userContro = require("../controller/userController");

router.post("/save", userContro.add);

module.exports = router;
