const express = require("express");
const router = express.Router();
const {Category} = require("../models/categoryModel");
const {getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory} = require("../controllers/categoriesController");

// READ all Categories
router.get("/", getAllCategories);

// READ a single Category using an ID
router.get("/:id", getCategoryById);

// CREATE a single Category
router.post("/", createCategory);

// Update a Category
router.put("/:id", updateCategory);

// DELELTE a Category
router.delete("/:id", deleteCategory);

module.exports = router;