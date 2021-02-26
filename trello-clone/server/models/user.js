const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    columns: [{
        title: String,
        id: {type: Schema.Types.ObjectId, ref: "Column"},
        items: [{id: String, name: String, tags: String}]
    }]
})

module.exports = mongoose.model("User", userSchema)