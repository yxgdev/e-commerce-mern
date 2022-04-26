const { Router } = require("express");

const {
  getCartItems,
  addItemToCart,
  deleteItemInCart,
} = require("../controllers/cartController.js");

const router = Router();
router.get("/:id", getCartItems);
router.post("/:id", addItemToCart);
router.delete("/:userId/:itemId", deleteItemInCart);

module.exports = router;
