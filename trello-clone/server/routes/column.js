const express = require("express");
const column = require("../controllers/column")
const router = express.Router();

 router.post("/", column.postColumn);
 
 router.get("/", column.getColums);

module.exports = router