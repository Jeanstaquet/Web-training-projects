const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
            },
    content: {
        type: String,
        required: true
    },
    creator: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    answer: [{
        answerId: {
            type: Schema.Types.ObjectId,
            ref: "Answer",
            required: true
        }
    }],

    tag: [{
        tagId: {
            type: Schema.Types.ObjectId,
            ref: "Tag",
            required: true
        }
    }],
    point: {
        type: Number,
        required: true
    },
    comment: [{
        commentId: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            required: true
        }
    }]
});

module.exports = mongoose.model('Post', postSchema);