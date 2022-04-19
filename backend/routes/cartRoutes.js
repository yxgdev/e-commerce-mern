const { Router } = require("express");

const {
  getCartItems,
  addItemToCart,
  deleteItemInCart,
} = require("../controllers/cartController.js");

const router = Router();
router.get("/cart/:id", getCartItems);
router.post("/cart/:id", addItemToCart);
router.delete("/cart/:userId/:itemId", deleteItemInCart);

module.exports = router;
