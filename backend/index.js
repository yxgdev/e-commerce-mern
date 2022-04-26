const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const itemRoutes = require("./routes/itemRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const Item = require("./models/Item.js");

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

// const temp = () => {
//   const items = [
//     {
//       id: 1,
//       title: "iPhone 14",
//       price: 4899,
//       desc: " The latest iPhone. Bringing you the best of all worlds.",
//     },
//     {
//       id: 2,
//       title: "iPad Air",
//       price: 2399,
//       desc: "The latest iPad. Allowing you to work any time anywhere.",
//     },
//     {
//       id: 3,
//       title: "Canon EOS 5D",
//       price: 9099,
//       desc: "One of the classic cameras, allowing you to take breathtaking pictures.",
//     },
//     {
//       id: 4,
//       title: "Huawei Matebook",
//       price: 7199,
//       desc: "Laptop for professional and business use. Enhance your productivity.",
//     },
//     {
//       id: 5,
//       title: "Nintendo Switch",
//       price: 2299,
//       desc: "All your latest games, in one switch.",
//     },
//     {
//       id: 6,
//       title: "PlayStation®5",
//       price: 6299,
//       desc: "Latest Gaming Console to enjoy the best title's",
//     },
//     {
//       id: 7,
//       title: "Mi Curve Monitor",
//       price: 1899,
//       desc: "A monitor built for gaming, productivity and multitasking.",
//     },
//     {
//       id: 8,
//       title: "Wacom Tablet",
//       price: 499,
//       desc: "A Tablet to help you design your ideas",
//     },
//   ];

//   for (let i = 0; i < items.length; i++) {
//     const currentItem = items[i];
//     Item.create({
//       productId: currentItem.id,
//       title: currentItem.title,
//       price: currentItem.price,
//       desc: currentItem.desc,
//     });
//   }
// };
// temp();
app.use("/items", itemRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
