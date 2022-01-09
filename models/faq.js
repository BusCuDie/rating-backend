const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Faq = new Schema({
  title: { type: String, require: true },
  asker: { type: String, require: true },
  answer: [],
});
module.exports = mongoose.model("Faq", Faq);
