const express = require("express")
const path = require("path")
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const errorController = require("./controllers/404")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop");

//call next in the mw
//parse bodies form forms
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));


app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)
