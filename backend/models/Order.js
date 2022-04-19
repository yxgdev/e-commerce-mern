const mongoose = require("mongoose");

const OrderSchema = new mongoose.model({
  userId: {
    type: String,
    required: true,
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
  billTotal: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("orderecom", OrderSchema);

module.exports = Order;
