const {Category} = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
    const categoryList = await Category.find();
    
    if(!categoryList){
        return res.status(500).send("Server Error. Please Try Again.")
    }
    res.status(200).send(categoryList);
};

exports.getCategoryById = async(req, res) => {
    const category = await Category.findById(req.params.id)
    if(!category) {
        return res.status(400).json({success: false, message: "Category with the given ID does not exist."});
    }
    res.status(200).send(category);
};

exports.createCategory = async(req, res) => {
    let category = new Category({
        name: req.body.name 
    });
    
    category = await category.save();

    if(!category){
        return res.status(500).send("Specified Category Cannot Be Created.")
    }

    res.send(category);

};

exports.updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name
        },
        {new: true})
    if(!category) {
        return res.status(400).json({success: false, message: "Category with the given ID does not exist."});
    }
    res.status(200).send(category);
};

exports.deleteCategory = (req, res) => {
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
};