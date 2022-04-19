const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: { type: String },
      title: String,
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  billAmount: {
    type: Number,
    required: true,
  },
});

const Cart = mongoose.model("cartecom", CartSchema);

module.exports = Cart;
