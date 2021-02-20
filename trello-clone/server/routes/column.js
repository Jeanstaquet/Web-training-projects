const express = require("express");
const column = require("../controllers/column")
const router = express.Router();

 router.post("/", column.postColumn);
 
 router.get("/", column.getColums);

 router.post("/swop", column.postColumnSwop);

 router.post("/newcard", column.postNewCard);

 router.post("/update", column.postUpdateCard);

 router.post("/delete", column.postDeleteCard)

module.exports = router;