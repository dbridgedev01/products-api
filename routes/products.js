const express = require("express");
const router = express.Router();
const {Product} = require("../models/product");
const {Category} = require("../models/category");

// READ all Products
router.get("/", async (req, res) => {
    const productList = await Product.find().populate("categoryId");

    if (!productList) {
        return res.status(500).send("Server Error. Please Try Again.")
    }
    res.status(200).send(productList);
});

// READ a single Product using an ID
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id).populate("categoryId");
    if (!product) {
        return res.status(400).json({
            success: false,
            message: "Product with the given ID does not exist."
        });
    }
    res.status(200).send(product);
});

// CREATE a single Product
router.post("/", async (req, res) => {

    // Check if Category ID exists 
    const category = await Category.findById(req.body.categoryId);

    if (!category) {
        return res.status(400).send("Invalid Category. Please Check The Category ID.");
    }
    let product = new Product({
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId
    });

    product = await product.save();

    if (!product) {
        return res.status(500).send("Specified Product Cannot Be Created.")
    }

    res.send(product);
});

// Update a Product
router.put("/:id", async (req, res) => {

    // Check if Category ID exists 
    const category = await Category.findById(req.body.categoryId);

    if (!category) {
        return res.status(400).send("Invalid Category. Please Check The Category ID.");
    }

    const product = await Product.findByIdAndUpdate(req.params.id, {
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId
    }, {
        new: true
    })
    if (!product) {
        return res.status(400).json({
            success: false,
            message: "Product with the given ID does not exist."
        });
    }
    res.status(200).send(product);
});

// DELELTE a Product
router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => {
            if (product) {
                return res.status(200).json({
                    success: true,
                    message: "Product Deleted Successfully."
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Product Not Found."
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                error: err
            })
        });
});

module.exports = router;