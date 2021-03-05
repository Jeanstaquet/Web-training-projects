const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: true
  }],
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Answer", answerSchema);
