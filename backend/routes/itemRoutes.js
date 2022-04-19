const { Router } = require("express");

const { getItems, postItem } = require("../controllers/itemController");
const router = Router();

router.get("/", getItems);
router.post("/", postItem);

module.exports = router;
