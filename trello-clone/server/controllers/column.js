const Column = require("../models/column");

exports.postColumn = (req, res, next) => {
    const col = new Column({
        title: "Todo",
        items: [item, item2]
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