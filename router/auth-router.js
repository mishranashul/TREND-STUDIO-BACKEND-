const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const signUpSchema = require("../validators/auth-validator");
const validate = require("../middewares/validate-middleware");

router.route("/").get(authController.home);
router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;

 