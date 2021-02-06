const express = require("express");


const router = express.Router();

const adminController = require("../controllers/admin/admin");

//admin/add-product
router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);


router.get("/products", adminController.getAdminProduct)

module.exports = router;
