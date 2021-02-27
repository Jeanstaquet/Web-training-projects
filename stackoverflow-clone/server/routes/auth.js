const express = require('express');

const router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", authController.postSignIn)

router.post("/signin", authController.postSignUp)

module.exports = router;