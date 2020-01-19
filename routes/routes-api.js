const express = require("express");
const router = express.Router();

// IMPORT CONTROLLERS
const ingredient_controller = require("../controllers/ingredient.controller");

// INGREDIENTS CRUD
router.post("/ingredients", ingredient_controller.ingredient_create);
router.get("/ingredients", ingredient_controller.ingredients_all);
router.get("/ingredients/:id", ingredient_controller.ingredient_details);
router.put("/ingredients/:id", ingredient_controller.ingredient_update);
router.delete("/ingredients/:id", ingredient_controller.ingredient_delete);

module.exports = router;
