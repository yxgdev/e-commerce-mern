const { Router } = require("express");
const { getOrders, checkOut } = require("../controllers/orderController");

const router = Router();

router.get("/order/:id", getOrders);
router.post("/order/:id", checkOut);

module.exports = router;
