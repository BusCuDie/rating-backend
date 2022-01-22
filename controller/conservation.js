const Conservation = require("../models/conservation");
const mongoose = require("mongoose");

require("dotenv").config();

const insert = (req, res, next) => {
  const userOneId = req.body.userOneId;
  const userSecondId = req.body.userSecondId;
  const senderId = req.body.senderId;
  const content = req.body.content;
  Conservation.findOne({
    usersId: {
      $all: [userOneId, userSecondId],
    },
  }).then((item) => {
    if (item) {
      item.message.push({
        senderId,
        content,
      });
      item.save().then(() => res.send("Đã thêm mới"));
      // res.send('Có rồi');
    } else {
      const conservation = new Conservation({
        usersId: [userOneId, userSecondId],
        message: [
          {
            senderId,
            content,
          },
        ],
      });
      conservation.save().then((e) => res.send(e));
    }
  });
};

const getAllMessage = (req, res, next) => {
  const userOneId = req.params.userOneId;
  const userSecondId = req.params.userSecondId;
  Conservation.findOne({
    usersId: {
        $all: [userOneId, userSecondId],
    },
  }).then((item) => {
    if (item) {
      res.json({  
        message:item.message});
    } else {
      res.json(null);
    }
  });
};
module.exports = {
  insert,
  getAllMessage,
};
