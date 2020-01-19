const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/index", {
    pageTitle: "Homepage"
  });
});

router.get("/create", function (req, res) {
  res.render("pages/create", {
    pageTitle: "New Ingredient",
    pageHeader: "Create a new Ingredient"
  });
});

module.exports = router;
