const Faq = require("../models/Faq");
const mongoose = require("mongoose");
const create = (req, res) => {
  const faq = new Faq({
    title: req.body.title,
    asker: req.body.asker,
  });
  faq.save().then(() => res.send("Thành công"));
};

const getAll = (req, res) => {
  Faq.find({}).then((faqs) => res.json(faqs));
};

const answer = (req, res) => {
  const id = req.params.id;
  Faq.findById(id)
    .then((faq) => {
      faq.answer.push({
        from: req.body.from,
        content: req.body.content,
      });
      faq.save();
      res.send("Thành công");
    })
    .catch(() => res.send("Lỗi"));
};
module.exports = { create, answer,getAll };
