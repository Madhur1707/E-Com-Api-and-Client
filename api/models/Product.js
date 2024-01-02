const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, require: true },
    inStock:{type: Boolean, deafault:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductsSchema);
