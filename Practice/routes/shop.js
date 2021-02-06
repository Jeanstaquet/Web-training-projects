const express = require("express");
const path = require("path");

const router = express.Router();
const productController = require("../controllers/shop/products");

router.get("/", productController.getProducts);


module.exports = router;