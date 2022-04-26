const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const itemRoutes = require("./routes/itemRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");

dotenv.config();

app.use(express.json());

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port);
    console.log("listening to port" + port);
  })
  .catch((err) => console.log(err));

app.use("/items", itemRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
