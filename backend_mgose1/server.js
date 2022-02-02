const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const itemSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Item = mongoose.model("Item", itemSchema);

app.get("/", (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (err) {
      console.log(err);
    } else {
      res.json(foundItems);
    }
  });
});

app.post("/", (req, res) => {
  const item = new Item({
    title: req.body.title,
    content: req.body.content,
  });
  item.save();
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  console.log(req.params.id);
  const checkedItemId = req.params.id;
  Item.findOneAndDelete({ _id: checkedItemId }, (err) => {
    if (!err) {
      console.log("Deleted item successfully");
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
