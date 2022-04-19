const { Router } = require("express");
const router = Router();

const { signUp, login } = require("../controllers/authController.js");

const auth = require("../middlewares/authMiddleware.js");

router.post("/register", signUp);
router.post("/login", login);

module.exports = router;
