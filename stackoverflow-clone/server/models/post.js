const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    answer: [
        {
            type: Schema.Types.ObjectId,
            ref: "Answer",
            required: true,
        },
    ],

    tag: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tag",
        },
    ],
    point: {
        type: Number,
        required: true,
    },
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: true,
        },
    ],
    time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
