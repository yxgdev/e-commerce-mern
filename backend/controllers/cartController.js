const Cart = require("../models/Cart");
const Item = require("../models/Item");
const User = require("../models/User");

const dotenv = require("dotenv");

dotenv.config();
// stripe import
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const getCartItems = async (req, res) => {
  // get user id from parameter in url
  const userId = req.params.id;

  //   retrieve cart items
  try {
    let cart = await Cart.findOne({ userId: userId });
    res.send(cart);
  } catch (error) {
    res.status(500).send("Something wrong in cart");
  }
};

//  router.post("/cart/:id", addItemToCart);
const addItemToCart = async (req, res) => {
  const productId = parseInt(req.params.id);
  const userObj = req.body;

  try {
    let user = await User.findOne({ email: userObj.email });
    let item = await Item.findOne({ productId: productId });

    if (!item) res.status(404).send("item not found");

    const price = item.price;
    const name = item.title;

    // check if item exist in cart
    let itemIndex = user.cart.findIndex((p) => p.productId == productId);

    // check if item exist in cart
    if (itemIndex > -1) {
      // item exist in cart
      let productItem = user.cart[itemIndex];

      if (productItem.quantity < 5) {
        productItem.quantity = productItem.quantity + 1;
      }
      user.cart[itemIndex] = productItem;
    } else {
      // item does not exist in cart
      user.cart.push({ productId, title: name, quantity: 1, price });
    }
    user = await user.save();
    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        cart: user.cart,
      },
    });
  } catch (error) {
    res.status(500).send("Add cart error");
  }
};

const deleteItemInCart = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.itemId;

  try {
    let user = await User.findOne({ _id: userId });
    let itemIndex = user.cart.findIndex((p) => p.productId == productId);

    if (itemIndex > -1) {
      let productItem = user.cart[itemIndex];
      // at position itemIndex, remove 1 items
      user.cart.splice(itemIndex, 1);
    }

    user = await user.save();

    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        cart: user.cart,
      },
    });
  } catch (error) {
    res.status(500).send("delete item error");
  }
};

const updateItemInCart = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.itemId;
  const quantity = parseInt(req.body.quantity);

  try {
    let user = await User.findOne({ _id: userId });
    let item = await Item.findOne({ productId: productId });

    if (!item) res.status(404).send("item not found");

    // check if item exist in cart
    let itemIndex = user.cart.findIndex((p) => p.productId == productId);

    // check if item exist in cart
    if (itemIndex > -1) {
      // item exist in cart
      let productItem = user.cart[itemIndex];
      productItem.quantity = quantity;
      user.cart[itemIndex] = productItem;
    }

    user = await user.save();
    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        cart: user.cart,
      },
    });
  } catch (error) {
    console.log("update item cart error");
  }
};

// (change in production)
const checkOut = async (req, res) => {
  const user = req.body;

  const items = user.cart;

  const email = user.email;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => {
        return {
          price_data: {
            currency: "myr",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log(error.message);
  }
};

const clearCart = async (req, res) => {
  const userObj = req.body;

  try {
    let user = await User.findOne({ _id: userObj.id });
    // clear cart
    user.cart = [];
    user = await user.save();
    return res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        cart: user.cart,
      },
    });
  } catch (error) {
    console.log("checkOutSuccessLogic error");
  }
};

module.exports = {
  getCartItems,
  addItemToCart,
  deleteItemInCart,
  updateItemInCart,
  clearCart,
  checkOut,
};
