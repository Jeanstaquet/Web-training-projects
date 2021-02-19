const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const columnSchema = new Schema({
            title: String,
            items: [{id: String, name: String, tags: String}]
});


module.exports = mongoose.model("Column", columnSchema)
