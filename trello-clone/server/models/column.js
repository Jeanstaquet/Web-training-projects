const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const columnSchema = new Schema({
            title: String,
            items: [{id: String, name: String, tags: String}],
            userId: {
                     type: Schema.Types.ObjectId,
                     ref: "User",
                     required: true}
});


module.exports = mongoose.model("Column", columnSchema)
