const Item = require("../models/Item");

// get all items
const getItems = (req, res) => {
  Item.find().then((item) => {
    return res.json(item);
  });
};

// post one item
const postItem = (req, res) => {
  const newItem = new Item(req.body);
  newItem.save().then((item) => res.json(item));
};

module.exports = { getItems, postItem };
