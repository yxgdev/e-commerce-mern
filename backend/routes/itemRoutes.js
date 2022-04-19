const { Router } = require("express");

const { getItems, postItem } = require("../controllers/itemController");
const router = Router();

router.get("/items", getItems);
router.post("/items", postItem);
