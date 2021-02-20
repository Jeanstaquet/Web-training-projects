const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");


const mongoConnect = require('./util/database');

const errorController = require('./controllers/error');


const User = require("./models/user");


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use((req, res, next) => {
    User.findByPk(1)
        //Storing a user in a request
        //Renvoie un sequelize object with the methods
        .then(user => {
            req.user = user;
            next();
        });
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);


mongoConnect(() => {
    app.listen(3000);
  });
  