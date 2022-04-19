const Cart = require("../models/Cart");
const Item = require("../models/Item");

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

const addItemToCart = async (req, res) => {
  const userId = req.params.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    let item = await Item.findOne({ _id: productId });

    if (!item) res.status(404).send("item not found");

    const price = item.price;
    const name = item.title;

    // if user have existing cart
    if (cart) {
      let itemIndex = cart.items.findIndex((p) => p.productId == productId);

      // check if item exist in cart
      if (itemIndex > -1) {
        // item exist in cart
        let productItem = cart.items[itemIndex];
        productItem.quantity = quantity;
        cart.items[itemIndex] = productItem;
      } else {
        // item does not exist in cart
        cart.items.push({ productId, title: name, quantity, price });
      }
    } else {
      // create a new cart for the user
      const newCart = await Cart.create({
        userId,
        items: [{ productId, title: name, quantity, price }],
        billAmount: quantity * price,
      });

      return res.status(201).send(newCart);
    }
  } catch (error) {
    res.status(500).send("Add cart error");
  }
};

const deleteItemInCart = async (req, res) => {
  const userId = req.params.id;
  const productId = req.params.itemId;

  try {
    let cart = await Cart.findOne({ userId });
    let itemIndex = cart.items.findIndex((p) => p.productId == productId);

    if (itemIndex > -1) {
      let productItem = cart.items[itemIndex];
      cart.billAmount -= productItem.quantity * productItem.price;
      // at position itemIndex, remove 1 items
      cart.items.splice(itemIndex, 1);
    }

    cart = await cart.save();

    return res.status(201).send(cart);
  } catch (error) {
    res.status(500).send("delte item error");
  }
};

module.exports = { getCartItems, addItemToCart, deleteItemInCart };
