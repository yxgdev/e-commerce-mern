const Cart = require("../models/Cart");
const Item = require("../models/Item");
const User = require("../models/User");

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
    console.log(user);
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

    console.log(user);

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

module.exports = { getCartItems, addItemToCart, deleteItemInCart };
