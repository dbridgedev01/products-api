const express = require("express");
const router = express.Router();
const {Category} = require("../models/category");

// READ all Categories
router.get("/", async (req, res) => {
    const categoryList = await Category.find();
    
    if(!categoryList){
        return res.status(500).send("Server Error. Please Try Again.")
    }
    res.status(200).send(categoryList);
});

// READ a single Category using an ID
router.get("/:id", async(req, res) => {
    const category = await Category.findById(req.params.id)
    if(!category) {
        return res.status(400).json({success: false, message: "Category with the given ID does not exist."});
    }
    res.status(200).send(category);
});

// CREATE a single Category
router.post("/", async(req, res) => {
    let category = new Category({
        name: req.body.name 
    });
    
    category = await category.save();

    if(!category){
        return res.status(500).send("Specified Category Cannot Be Created.")
    }

    res.send(category);

});

// Update a Category
router.put("/:id", async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name
        },
        {new: true})
    if(!category) {
        return res.status(400).json({success: false, message: "Category with the given ID does not exist."});
    }
    res.status(200).send(category);
});

// DELELTE a Category
router.delete("/:id", (req, res) => {
    Category.findByIdAndDelete(req.params.id)
    .then(category => {
        if(category){
            return res.status(200).json({success: true, message: "Category Deleted Successfully."});
        } else{
            return res.status(400).json({success: false, message: "Category Not Found."});
        }
    })
    .catch(err => {
        return res.status(500).json({success: false, error: err})
    });
});

module.exports = router;