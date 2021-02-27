const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    post: [{
        postId: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true
        }
    }],
    amount: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Tag', tagSchema)