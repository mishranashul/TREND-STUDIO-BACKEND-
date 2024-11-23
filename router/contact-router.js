const express = require("express");
const router = express.Router();
const conatctForm = require("../controllers/contact-controller");


router.route("/contact").post(conatctForm);


module.exports = router;

 