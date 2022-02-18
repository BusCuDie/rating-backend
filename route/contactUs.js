const express = require("express");
const router = express.Router();
const ContactUsController = require("../controller/contactUsController");
router.post("/create", ContactUsController.create);
router.get("/", ContactUsController.getAll);

module.exports = router;
