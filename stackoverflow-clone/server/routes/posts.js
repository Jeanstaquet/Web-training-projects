const express = require('express');

const router = express.Router();

const postController = require("../controllers/posts");

router.post("/ask", postController.postPost)

module.exports = router;