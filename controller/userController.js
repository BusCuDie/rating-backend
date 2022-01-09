const jwt = require("jsonwebtoken");
const User = require("../models/User");
const mongoose = require("mongoose");
require("dotenv").config();
const signUp = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    account: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  user
    .save()
    .then(() => res.json({ st: "Thành công" }))
    .catch(() => res.json({ st: "Lỗi rồi" }));
};

 function generateAcessToken(user) {

  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 60 });
}
let refreshTokens = [];
 function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: 60,
  });
  refreshTokens.push(refreshToken);
  return refreshToken;
}

const login = (req, res,next) => {
  User.findOne({
    'account.username': req.body.username,
    'account.password': req.body.password,
  })
    .then((user) => {
      console.log(req.body.username,'+',req.body.password);
      if (user) {
        try {
          // const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
          //   expiresIn: 20,
          // });
          const token = generateAcessToken({_id:user._id});
          const refreshToken = generateRefreshToken({_id:user._id});

          res.json({ token,refreshToken, user, error: null });
        } catch (error) {
          res.json({ token,refreshToken, user: null, error: "Can not find user" });
        }
      } else {
        res.json({ token,refreshToken, user: null, error: "Can not find user" });
      }
    })
    .catch((err) => res.status(401).send("Không tìm thấy user"));
};

const editprofile = (req, res, next) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      (user.name = req.body.name),
        (user.gender = req.body.gender),
        (user.kinda = req.body.kinda),
        (user.cmnd = req.body.cmnd),
        (user.phone = req.body.phone);
      user.save();
      res.send("Thành công");
    })
    .catch(() => res.send("Lỗi"));
};

const rating = (req, res, next) => {
  const UserId = req.params.id;
  console.log(UserId);
  User.findById(UserId)
    .then((result) => {
      result.ratepoint -= req.body.point;
      result.ratecomments.push({
        createTime: new Date(),
        status: req.body.status,
        ability: req.body.ability,
        atitude: req.body.atitude,
        detail: req.body.detail,
      });
      result.save();
      res.send("Thành công");
    })
    .catch((err) => {
      res.status(401).send("Error");
      next();
    });
};

const getAllUsers = (req, res, next) => {
  User.find({ role: "CAD" })
    .then((Users) => res.json(Users))
    .catch((err) => res.status(401).send("Error"));
};

const comments = (req, res) => {
  const UserId = req.params.id;
  console.log(UserId);
  User.findById(UserId)
    .then((result) => {
      res.json(result.ratecomments);
    })
    .catch((err) => {
      res.status(401).send("Error");
    });
};
const youseftComments = (req, res) => {
  const UserId = req.params.id;
  console.log(UserId);
  User.findById(UserId)
    .then((result) => {
      res.json(result.rateMySeft);
    })
    .catch((err) => {
      res.status(401).send("Error");
    });
};
const ratemyseft = (req, res, next) => {
  const UserId = req.params.id;
  console.log(UserId);
  User.findById(UserId)
    .then((result) => {
      result.rateMySeft.push({
        kdg: req.body.kdg,
        pcct: req.body.pcct,
        ddls: req.body.ddls,
        nlct: req.body.nlct,
        tdpv: req.body.tdpv,
        kdct: req.body.kdct,
        txl: req.body.txl,
      });
      result.save();
      res.send("Thành công");
    })
    .catch((err) => {
      res.status(401).send("Error");
      next();
    });
};
module.exports = {
  signUp,
  login,
  rating,
  ratemyseft,
  getAllUsers,
  comments,
  youseftComments,
  editprofile,
};
