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

const item = {
    id: "zefzef",
    name: "Clean the house",
    tags: "Urgent S.O.S."
  }