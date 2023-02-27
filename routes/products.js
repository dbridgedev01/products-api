const express = require("express");
const router = express.Router();
const {Product} = require("../models/productModel");
const {Category} = require("../models/categoryModel");
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/productsController");

// READ all Products
router.get("/", getAllProducts);

// READ a single Product using an ID
router.get("/:id", getProductById);

// CREATE a single Product
router.post("/", createProduct);

// Update a Product
router.put("/:id", updateProduct);

// DELELTE a Product
router.delete("/:id", deleteProduct);

module.exports = router;