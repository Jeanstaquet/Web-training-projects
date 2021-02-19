const mongoose = require("mongoose")
//Nous permet de créer de nouveau schema
const Schema = mongoose.Schema;

//dans mongodb il n'y a pas de schema, mais ici on va en créer un pour abstraire
//les trucs des querys que mongoose gère pour nous
const columnSchema = new Schema({
            title: String,
            items: [{id: String, name: String, tags: String}]
});

//On va donner un nom au schema
module.exports = mongoose.model("Column", columnSchema)

// const item = {
//     id: "zefzef",
//     name: "Clean the house",
//     tags: "Urgent S.O.S."
//   }
  
//   const item2 = {
//     id: "zefze",
//     name: "Wash the car"
//   }

//   const item3 = {
//     id: "eifjefd",
//     name: "Go forward in this project"
//   }

//   const item4 = {
//     id: "eifjzsefd",
//     name: "Go forzszsward in this project"
//   }

//   const item5 = {
//     id: "zdzjefd",
//     name: "zdszorward in this project"
//   }

// const dataCol = {
//     "todo": {
//         title: "Todo",
//         items: [item, item2]
//       },
//       "in-progress": {
//         title: "In Progress",
//         items: [item5]
//       },
//       "done": {
//         title: "Completed",
//         items: [item3, item4]}
// }