const { Router } = require("express");

const {
  getCartItems,
  addItemToCart,
  deleteItemInCart,
  updateItemInCart,
} = require("../controllers/cartController.js");

const router = Router();
router.get("/:id", getCartItems);
router.post("/:id", addItemToCart);
router.patch("/:userId/:itemId", updateItemInCart);
router.delete("/:userId/:itemId", deleteItemInCart);

module.exports = router;
