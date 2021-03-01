const { populate } = require("../models/post");
const Post = require("../models/post")

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
        comment: []
    })
    post.save()
    .then(result => {
        console.log(result, "product Created");
        res.send("OK")
    })
    .catch(err => {
        console.log(err);
        res.send("Error");
    })
}

//Gets all the posts of the db
exports.getAllPosts = (req, res, next) => {
    Post.find()
        .populate("creator")
        // .execPopulate()
        .then(posts => {
            posts && true ? res.send(posts) : res.send("no posts") 
        })
        .catch(err => {
            console.log(err)
            res.send("error")
        })
}