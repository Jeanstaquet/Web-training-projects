const express = require("express")

const app = express();

app.use("/add-product", (req, res, next) => {    
    res.send("<h1>Hello</h1>")
})


app.use("/", (req, res, next) => {    
    res.send("<h1>Hello</h1>")
})

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000)
