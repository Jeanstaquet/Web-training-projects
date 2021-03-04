const Post = require("../models/post");
const Answer = require("../models/answer");
//Post a post in the db
exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const tags = req.body.tags;
    const post = new Post({
        title: title,
        content: body,
        creator: req.session.user,
        answer: [],
        tag: [],
        point: 0,
        comment: [],
    });
    post.save()
        .then((result) => {
            console.log(result, "product Created");
            res.send("OK");
        })
        .catch((err) => {
            console.log(err);
            res.send("Error");
        });
};

//Gets all the posts of the db
exports.getAllPosts = (req, res, next) => {
    Post.find()
        .populate("creator")
        .then((posts) => {
            posts && true ? res.send(posts) : res.send("no posts");
        })
        .catch((err) => {
            res.send("error");
        });
};

exports.postAnswer = (req, res, next) => {
    const id = req.body.postId;
    const answer = req.body.answer;
    const user = req.session.user;
    Post.findById(id)
        .then((post) => {
            const newAnswer = new Answer({
                post: post,
                author: user,
                content: answer,
            });
            newAnswer.save();
            post.answer.push(newAnswer._id)
            return post.save()
        })
        .then((result) => {
            
            res.send("Added");
        })
        .catch((err) => console.log(err));
};
