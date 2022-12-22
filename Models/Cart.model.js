const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    product_count: { default: 1 },
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
