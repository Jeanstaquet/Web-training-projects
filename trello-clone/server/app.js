const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const User = require("./models/user");
const mongoose = require("mongoose")

const admin = require("firebase-admin")
const serviceAccount = require("./trelloclone-2dc98-firebase-adminsdk-55ai2-40290939a1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

const test = () => {
  const data = {
    User: "jefef"
  }
  return db.collection("U").doc().set(data).then(rep => console.log(rep))
}

test();

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

