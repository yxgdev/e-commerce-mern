const { Router } = require("express");

const {
  getCartItems,
  addItemToCart,
  deleteItemInCart,
  updateItemInCart,
  checkOut,
  clearCart,
} = require("../controllers/cartController.js");

const router = Router();
router.get("/:id", getCartItems);
router.post("/checkout", checkOut);
router.post("/:id", addItemToCart);
router.patch("/clear", clearCart);
router.patch("/:userId/:itemId", updateItemInCart);
router.delete("/:userId/:itemId", deleteItemInCart);
module.exports = router;
