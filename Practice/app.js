const express = require("express")
const path = require("path")
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop");

//call next in the mw
//parse bodies form forms
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));


app.use("/admin", adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render("404", {pageTitle: "Error"})
})

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)