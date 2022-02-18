const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ContactUs = new Schema({
  title: { type: String, require: true },
  content: { type: String, default: "Trống" },
  name: { type: String, default: "Ẩn danh" },
  phone: { type: String, default: "Ẩn danh" },
});
module.exports = mongoose.model("ContactUs", ContactUs);
