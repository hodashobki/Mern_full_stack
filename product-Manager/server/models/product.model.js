const mongoose=require("mongoose");

const ProductShema= new mongoose.Schema({
    title:{type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]},
    price: {
        type: Number,
        min: [1, "You must be at least 1 or older to register"],
        max: [150, "You must be at most 149 years old to register"]
      },

    description:{type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long"]}
},{timestamps:true});
const Product = mongoose.model("Product",ProductShema);

module.exports= Product;