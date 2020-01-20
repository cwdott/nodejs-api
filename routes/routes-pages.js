const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// const getIngredients = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/api/ingredients");
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error);
//   }
// };

router.get("/", function (req, res) {
  // const ingredients = getIngredients();
  // console.log("here they are: ", ingredients)
  res.render("pages/index", {
    pageTitle: "Homepage",
    // ingredients: ingredients
  });
});

router.get("/create", function (req, res) {
  res.render("pages/create", {
    pageTitle: "New Ingredient",
    pageHeader: "Create a new Ingredient"
  });
});

module.exports = router;
