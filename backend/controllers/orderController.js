const Cart = require("../models/Cart");
const Order = require("../models/Order");
const User = require("../models/User");
const config = require("config");
const stripe = require("stripe")(config.get("stripeAPIKEY"));

const getOrders = async (req, res) => {
  const userId = req.params.id;

  // retrive all orders and sorted by latest order
  Order.find({ userId })
    .sort({ date: -1 })
    .then((orders) => res.json(orders));
};
const checkOut = async (req, res) => {
  try {
    const userId = req.params.id;
    const { source } = req.body;
    let cart = await Cart.findOne({ userId });
    let user = await User.findOne({ _id: userId });

    const email = user.email;

    if (cart) {
      // stripe create charge
      const charge = await stripe.charges.create({
        amount: cart.billAmount,
        currency: "myr",
        source: source,
        receipt_email: email,
      });

      if (!charge) throw Error("payment failedd, something went wrong");
      if (charge) {
        // create order after charging user money
        const order = await Order.create({
          userId,
          items: cart.items,
          bill: cart.bill,
        });

        // delte cart after items paid
        const data = await Cart.findByIdAndDelete({ _id: cart.id });

        return res.status(201).send(order);
      }
    } else {
      res.status(500).send("There are no items in your cart");
    }
  } catch (error) {
    res.status(500).send("something went wrong during checkout");
  }
};

module.exports = { checkOut, getOrders };
