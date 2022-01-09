const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  name: { type: String, require: true },
  birthday: { type: Date, default: "2020-01-01" },
  gender: { type: String, default: "Trống" },
  phone: { type: String, default: "Trống" },
  department: { type: String, default: "Trống" },
  position: { type: String, default: "Trống" },
  role: { type: String, default: "CIV" },
  kinda:{type:String,default:'Kinh'},
  CMND:{type:String,default:'Trống'},
  avatar: {
    type: String,
    default:
      "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg",
  },
  ratepoint: { type: Number, default: 100 },
  ratecomments: [],
  account: {
    username: { type: String, default: "ID4kmb" },
    password: { type: String, default: "hien12345" },
  },
  rateMySeft: [],
});
module.exports = mongoose.model("User", User);
