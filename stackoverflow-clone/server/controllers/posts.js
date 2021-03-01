const Post = require("../models/post")

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