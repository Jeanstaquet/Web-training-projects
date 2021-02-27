const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const User = require("./models/user");
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 5000;

const columnRoutes = require("./routes/column");

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use((req, res, next) => {
  User.findById("603048fb81c34805f0a6be23")
    .then(user => {
      console.log("found")
      console.log(user)
      req.user = user;
      next()
    })
    .catch(err => console.log(err))
})
app.use(columnRoutes)



mongoose.connect("mongodb+srv://AdminJean:TrelloClone@cluster0.2rxqq.mongodb.net/<dbname>?retryWrites=true&w=majority")
  .then(result => {

    app.listen(PORT)
  })
  .catch(error => console.log(error))

