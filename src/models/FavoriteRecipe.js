// src/models/FavoriteRecipe.js
import mongoose from 'mongoose';

const FavoriteRecipeSchema = new mongoose.Schema({
  recipeId: { type: String, required: true },
  recipeName: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.FavoriteRecipe ||
  mongoose.model('FavoriteRecipe', FavoriteRecipeSchema);
