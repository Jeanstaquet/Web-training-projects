const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");

const errorController = require('./controllers/error');
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart")
const CartIem = require("./models/cart-item")

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

//Si un user se delete, l'user se delete aussi. 
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
//On peut ne garder que celui-la
User.hasMany(Product);

//One direction link is enough
//Va créer un id dans cart avec l'id de l'user
User.hasOne(Cart);

//Many2Many
//trough = ou doit être stocké la connection 
Cart.belongsToMany(Product, {through: CartIem});
Product.belongsToMany(Cart, {through: CartIem});


//Permet de créer les tables
sequelize.sync()
.then(result => {
    return User.findByPk(1);
    // app.listen(3000);
})
.then(user => {
    if(!user) {
        return User.create({name: "Jean", email: "test@test.com"})
    }
    //Réoud la promesse
    return Promise.resolve(user);
})
.then((user) => {
    return user.createCart()
})
.then(cart => app.listen(3000))
.catch(err => console.log(err))


