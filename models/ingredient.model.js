const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IngredientSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  calories: { type: Number },
  servingText: { type: String, max: 20 },
  servingAmount: { type: Number },
  servingUnit: { type: String, max: 5 },
  fat: { type: Number },
  fatSaturated: { type: Number },
  fatTrans: { type: Number },
  cholesterol: { type: Number },
  sodium: { type: Number },
  carbs: { type: Number },
  fiber: { type: Number },
  sugar: { type: Number },
  sugarIncluded: { type: Number },
  sugarAdded: { type: Number },
  protein: { type: Number }
});

// Export the model
module.exports = mongoose.model("Ingredient", IngredientSchema);