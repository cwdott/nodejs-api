const Ingredient = require("../models/ingredient.model");

// CREATE a new Ingredient
exports.ingredient_create = function(req, res, next) {
  console.log("creating new ingredient: ", req.body);
  let ingredient = new Ingredient({
    name: req.body.name,
    calories: req.body.calories,
    servingText: req.body.servingText,
    servingAmount: req.body.servingAmount,
    servingUnit: req.body.servingUnit,
    fat: req.body.fat,
    fatSaturated: req.body.fatSaturated,
    fatTrans: req.body.fatTrans,
    cholesterol: req.body.cholesterol,
    sodium: req.body.sodium,
    carbs: req.body.carbs,
    fiber: req.body.fiber,
    sugar: req.body.sugar,
    sugarIncluded: req.body.sugarIncluded,
    sugarAdded: req.body.sugarAdded,
    protein: req.body.protein
  });

  ingredient.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Ingredient Created successfully");
  });
};

// RETURN all Ingredients
exports.ingredients_all = function(req, res, next) {
  Ingredient.find(function(err, ingredients) {
    if (err) return next(err);
    res.send(ingredients);
  });
};

// RETURN one Ingredient by ID
exports.ingredient_details = function(req, res, next) {
  Ingredient.findById(req.params.id, function(err, ingredient) {
    if (err) return next(err);
    res.send(ingredient);
  });
};

// UPDATE one Ingredient by ID
exports.ingredient_update = function(req, res, next) {
  Ingredient.findOneAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Ingredient udpated.");
  });
};

// DELETE one Ingredient by ID
exports.ingredient_delete = function(req, res, next) {
  Ingredient.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
