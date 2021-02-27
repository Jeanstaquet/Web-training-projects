const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const PORT = process.env.PORT || 5000;

const MONGODB_URI = "mongodb+srv://AdminJean:TrelloClone@cluster0.2rxqq.mongodb.net/StackClone?retryWrites=true&w=majority"
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions',
})


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );


mongoose.connect(MONGODB_URI)
  .then(result => {
    console.log("Connected to the db")
    app.listen(PORT)
  })
  .catch(error => console.log(error))