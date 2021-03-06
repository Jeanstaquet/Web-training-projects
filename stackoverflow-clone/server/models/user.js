const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pseudo: {
        type: String,
        required: true,
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
    ],
    answer: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer",
            required: true,
        },
    ],
    points: {
        type: Number,
        required: true,
    },
    upVotedAnswer: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer",
            required: true,
        },
    ],
    downVotedAnswer: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer",
            required: true,
        },
    ],
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: true,
        },
    ],
    time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
