const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose")


const app = express()
const PORT = process.env.PORT || 5000;

const columnRoutes = require("./routes/column");

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(columnRoutes)

mongoose.connect("mongodb+srv://AdminJean:TrelloClone@cluster0.2rxqq.mongodb.net/<dbname>?retryWrites=true&w=majority")
  .then(result => {
    app.listen(PORT)
  })
  .catch(error => console.log(error))