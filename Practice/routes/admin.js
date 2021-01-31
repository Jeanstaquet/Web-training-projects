const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

//admin/add-product
router.get("/add-product", (req, res, next) => {  
    console.log("tu run ?")  
    res.sendFile(path.join(rootDir,"views", "add-product.html"))
})

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;