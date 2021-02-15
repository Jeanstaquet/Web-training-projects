const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors");
const mongoConnect = require("./database")


app.use(cors());


app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

mongoConnect((client) => {
    app.listen(port)
})
