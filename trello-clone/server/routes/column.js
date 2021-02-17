const express = require("express");
const column = require("../controllers/column")
const router = express.Router();

 router.post("/", column.postColumn);

module.exports = router