const Column = require("../models/column");
const uuidv4 = require("uuid");

exports.postColumn = (req, res, next) => {
    const title = req.body.title
    const col = new Column({
            title: title,
            items: []
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

exports.postColumn = (req, res, next) => {
    const id = req.body;
    const srcDroppableId = id.srcDroppableId._id;
    const srcIndex = id.srcIndex;
    console.log(id)
    Column.findById(srcDroppableId)
        .then(col => {
            col.items.splice(srcIndex, 1)
            col.save
        })
        .catch(err => console.log(err.message))

    Column.findById()
}

const item = {
    id: "zefzef",
    name: "Clean the house",
    tags: "Urgent S.O.S."
  }