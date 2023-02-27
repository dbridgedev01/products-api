const mongoose = require("mongoose");

productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    qtyPerUnit: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    unitInStock: {
        type: Number,
        required: true
    },
    discontinued: {
        type: Boolean,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
});

exports.Product = mongoose.model("Product", productSchema);