const express = require('express');

const router = express.Router();
const authController = require("../controllers/auth");

router.post("/signup", authController.postSignUp)

router.post("/signin", authController.postSignIn)

module.exports = router;