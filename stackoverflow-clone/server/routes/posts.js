const express = require('express');

const router = express.Router();

const postController = require("../controllers/posts");

router.post("/ask", postController.postPost)

router.get("/post", postController.getAllPosts)

router.post("/answer", postController.postAnswer)

module.exports = router;