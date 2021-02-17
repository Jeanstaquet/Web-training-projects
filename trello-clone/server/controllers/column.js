const Column = require("../models/column");

exports.postColumn = (req, res, next) => {
    const col = new Column({
        title: "Completed",
        items: [item3, item4]
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

// exports.getColById = (req, res, next) => {
//     Column.findById()
// }
const item = {
    id: "zefzef",
    name: "Clean the house",
    tags: "Urgent S.O.S."
  }
  
  const item2 = {
    id: "zefze",
    name: "Wash the car"
  }

  const item3 = {
    id: "eifjefd",
    name: "Go forward in this project"
  }

  const item4 = {
    id: "eifjzsefd",
    name: "Go forzszsward in this project"
  }

  const item5 = {
    id: "zdzjefd",
    name: "zdszorward in this project"
  }

const dataCol = {
    "todo": {
        title: "Todo",
        items: [item, item2]
      },
      "in-progress": {
        title: "In Progress",
        items: [item5]
      },
      "done": {
        title: "Completed",
        items: [item3, item4]}
}