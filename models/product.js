const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleae provide product name"],
    trim: true,
    maxlength: [120, "Product name should not be more than 120 characters"],
  },
  price: {
    type: Number,
    required: [true, "Pleae provide product price"],
    maxlength: [6, "Product price should not be more than 6 digits"],
  },
  description: {
    type: String,
    required: [true, "Pleae provide product description"],
  },
  photos: [
    {
      id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [
      true,
      "Pleae select category from shortsleeves, longsleeves, sweatshirts, hoodies",
    ],
    enum: {
      values: ["shortsleeves", "longsleeves", "sweatshirts", "hoodies"],
      message:
        "Pleae select category ONLY from shortsleeves, longsleeves, sweatshirts, hoodie",
    },
  },
  stock: {
    type: Number,
    required: [true, "Pleease add a number in stock"],
  },
  brand: {
    type: String,
    required: [true, "Please add a brand for clothing"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      ratings: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
