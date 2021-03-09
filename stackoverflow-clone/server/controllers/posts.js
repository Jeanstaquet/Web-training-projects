const Post = require("../models/post");
const Answer = require("../models/answer");
const Comment = require("../models/comment");
const { ObjectId } = require("bson");

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
                comment: [],
                point: 0,
            });
            newAnswer.save();
            post.answer.push(newAnswer._id);
            return post.save();
        })
        .then((result) => {
            res.send("Added");
        })
        .catch((err) => console.log(err));
};

exports.getAnswsers = (req, res, next) => {
    const id = req.params.postId;
    Answer.find({ post: id })
        .populate("author")
        .populate("comment")
        .then((answer) => {
            return res.send(answer);
        })
        .catch((err) => res.send(err));
};

exports.postPoint = (req, res, next) => {
    // const answerId = req.body.answerId;
    // const method = req.body.method;
    // const user = req.session.user;
    // User.findById(user._id)
    //     .then((user) => {
    //         const upVoted = user.upVotedAnswer.includes(ObjectId(answerId));
    //         const downVoted = user.downVotedAnswer.includes(ObjectId(answerId));
    //         console.log("1")
    //         return { upVoted: upVoted, downVoted: downVoted, user: user };
    //     })
    //     .then(({ upVoted, downVoted, user }) => {
    //         console.log("2")
    //         if (upVoted || downVoted) {
    //             console.log("ok")
    //             if(downVoted && method === "up" && !upVoted) {
    //                 console.log("3")
    //                 Answer.findById(answerId).
    //                     then((answer) => {
    //                         console.log("4")
    //                         answer.point = answer.point + 1;
    //                         user.upVotedAnswer.push(ObjectId(answerId))
    //                         //user.downVotedAnswer.pop(ObjectId(answerId))
    //                         answer.save();
    //                         user.save();
    //                         return res.send("updated")
    //                     })
    //                     .catch(err => res.send(err))
    //             } else if (upVoted && method === "down" && !downVoted) {
    //                 Answer.findById(answerId).
    //                 then((answer) => {
    //                     console.log("4")
    //                     answer.point = answer.point + 1;
    //                     user.downVoted.push(ObjectId(answerId))
    //                     //user.downVotedAnswer.pop(ObjectId(answerId))
    //                     answer.save();
    //                     user.save();
    //                     return res.send("updated")
    //                 })
    //             }
    //         } else {
    //             Answer.findById(answerId)
    //                 .then((answer) => {
    //                     method === "up"
    //                         ? ((answer.point = answer.point + 1),
    //                           user.upVotedAnswer.push(ObjectId(answerId)))
    //                         : ((answer.point = answer.point - 1),
    //                           user.downVotedAnswer.push(ObjectId(answerId)));
    //                     answer.save();
    //                     user.save();
                        
    //                 }).catch(err => res.send(err))
    //         }
    //         return res.send("go");
    //     })
    //     .catch(err => res.send(err))
    res.send(" ")
};
 
exports.postComment = (req, res, next) => {
    const comment = req.body.comment;
    const answerId = req.body.answerId;
    const user = req.session.user;
    Answer.findById(answerId)
    .then(answer => {
        const com = new Comment({
            author: user,
            content: comment,
        })
        answer.comment.push(com._id)
        answer.save()
        com.save()
    })

    .then(() => {
        res.send("Comment added")
    })
    .catch((err) => res.send(err))
    
}