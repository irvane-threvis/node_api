const express = require("express");
const router = express.Router();
const { getproducts, getproductid, createproduct, updateproduct, deleteproduct } = require("../controllers/product.controller.js");

router.get("/", getproducts);
router.get("/:id", getproductid);
router.post("/", createproduct);
router.put("/:id", updateproduct);
router.delete("/:id", deleteproduct);

module.exports = router;