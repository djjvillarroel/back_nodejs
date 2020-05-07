const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const myschema = new Schema({
  indicator: String,
  item: [String],
  user: String,
  date: Date,
});

const model = mongoose.model("ItemByUser", myschema);
module.exports = model;
