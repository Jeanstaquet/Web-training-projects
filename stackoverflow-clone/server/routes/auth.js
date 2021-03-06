const express = require('express');

const router = express.Router();

const authController = require("../controllers/auth");

router.post("/signin", authController.postSignIn)

router.post("/signup", authController.postSignUp)

router.post("/logout", authController.postLogout)


module.exports = router;