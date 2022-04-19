const Item = require("../models/Item");

const getItems = (req, res) => {
  Item.find().then((item) => {
    return res.json(item);
  });
};

const postItem = (req, res) => {
  const newItem = new Item(req.body);
  newItem.save().then((item) => res.json(item));
};

module.exports = { getItems, postItem };
