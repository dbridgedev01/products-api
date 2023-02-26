const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
const categoriesRoute = require("./routes/categories");
const productsRoute = require("./routes/products");

app.use("/api/categories", categoriesRoute);
app.use("/api/products", productsRoute);

// Database Connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected To Database.");
  })
  .catch((err) => {
    console.log(err);
  });

// Server
app.listen(3000, () => {
    console.log("Server Started, Listening on Port 3000.");
});

module.exports = app;