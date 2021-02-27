const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
                postId: {
                    type: Schema.Types.ObjectId,
                    ref: "Post",
                    required: true
                }
            }],
    answers: [{
                answerId: {
                    type: Schema.Types.ObjectId,
                    ref: "Answer",
                    required: true
                }
            }],
    points: {
        type: Number,
        required: true
    },
    upVotedPost: [{
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true
        }
    }],
    downVotedPost: [{
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true
        }
    }],
    comment: [{
        commentId: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: true
        }
    }]
});

module.exports = mongoose.model('User', userSchema);