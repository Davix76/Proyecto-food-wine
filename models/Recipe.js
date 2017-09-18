const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  avatar: String,
  difficulty: String,
  ingredient: String,
  type: String,
  reviews: String

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});



const Recipes = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
