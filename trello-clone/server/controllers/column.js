const Column = require("../models/column");
const uuidv4 = require("uuid");

exports.postColumn = (req, res, next) => {
    // const title = req.body.title
    const title = "Hello there"
    const col = new Column({
            title: title,
            items: [item]
    })
    col.save()  
        .then(result => {
            res.send("Data added")
        })  
}

exports.getColums = (req, res, next) => {
    Column.find()
        .then(col => {
            res.send(col)
        })
}

exports.postColumnSwop = (req, res, next) => {
    const id = req.body;
    const itemCopy = req.body.itemCopyt
    const srcDroppableId = id.srcDroppableId._id;
    const destDroppableId = id.destDroppableId._id
    const srcIndex = id.srcIndex;
    Column.findByIdAndUpdate(
        srcDroppableId, {$pull: {items : {_id: itemCopy._id}}}, { safe: true, upsert: true }
    ).then(() => {
        Column.findByIdAndUpdate(
            destDroppableId, {$push: {items : itemCopy}}, { safe: true, upsert: true }
        ).then(response => res.send("Good")) 
    })



}

exports.postNewCard = (req, res, next) => {
    const id = req.body.idCol;
    const newItem = req.body.newItem;

    Column.findByIdAndUpdate(
        id, {$push: {items: newItem}}, { safe: true, upsert: true }
    ).then(result => res.send("Item added"))
}

const item = {
    id: "zdddd",
    name: "Clean ",
    tags: "Urgent"
  }