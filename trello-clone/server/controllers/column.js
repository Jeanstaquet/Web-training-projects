const Column = require("../models/column");

exports.postColumn = (req, res, next) => {
    const col = new Column({
        title: "Test23",
        items: [{
            id: "zefzef",
            name: "Clean the house",
            tags: "Urgent S.O.S."}
        ]
    })

    col.save()  
        .then(result => {
            res.send("Data added")
        })  
}
