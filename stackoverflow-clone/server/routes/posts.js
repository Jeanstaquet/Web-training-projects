const express = require("express");

const router = express.Router();

const postController = require("../controllers/posts");
//Posts a question
router.post("/ask", postController.postPost);
//Gets all the post 
router.get("/post", postController.getAllPosts);
//Post an answer
router.post("/answer", postController.postAnswer);
//Get the answers for a post
router.get("/answers/:postId", postController.getAnswsers);
//Modify answer's points
router.post("/point", postController.postPoint);
//Post a new comment
router.post("/comment", postController.postComment);
module.exports = router;
