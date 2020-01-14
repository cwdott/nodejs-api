const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("pages/index");
});

router.get("/create", function(req, res) {
  res.render("pages/create");
});

module.exports = router;
