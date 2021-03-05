const express = require("express");

const router = express.Router();

const postController = require("../controllers/posts");

router.post("/ask", postController.postPost);

router.get("/post", postController.getAllPosts);

router.post("/answer", postController.postAnswer);

router.get("/answers/:postId", postController.getAnswsers);

module.exports = router;
