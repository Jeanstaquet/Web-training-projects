const Post = require("../models/post");
const Answer = require("../models/answer");
const User = require("../models/user");
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
        .then((answer) => {
            return res.send(answer);
        })
        .catch((err) => res.send(err));
};

// exports.postPoint = (req, res, next) => {
//     const answerId = req.body.answerId;
//     const method = req.body.method;
//     const user = req.session.user;
//     User.findById(user._id)
//         .then((user) => {
//             const upVoted = user.upVotedAnswer.includes(ObjectId(answerId));
//             const downVoted = user.downVotedAnswer.includes(ObjectId(answerId));
//             return { upVoted: upVoted, downVoted: downVoted, user: user };
//         })
//         .then(({ upVoted, downVoted, user }) => {
//             upVoted && res.send("Exist");
//             downVoted && res.send("Exist");
//             if (upVoted || downVoted) {
//                 return res.send("Exist");
//             } else {
//                 Answer.findById(answerId)
//                     .then((answer) => {
//                         method === "up"
//                             ? ((answer.point = answer.point + 1),
//                               user.upVotedAnswer.push(ObjectId(answerId)))
//                             : ((answer.point = answer.point - 1),
//                               user.downVotedAnswer.push(ObjectId(answerId)));
//                         answer.save();
//                         user.save();
//                          res.send("go");
//                          return
//                     })
        
//             }
//         })

// };
 