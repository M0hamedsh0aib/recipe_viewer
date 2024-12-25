// src/pages/api/favorites.js
import dbConnect from '../../utils/dbConnect';
import FavoriteRecipe from '../../models/FavoriteRecipe';

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const favorites = await FavoriteRecipe.find({});
        res.status(200).json(favorites);
      } catch (error) {
        res.status(400).json({ error: 'Failed to fetch favorites' });
      }
      break;
    case 'POST':
      try {
        const { recipeId, recipeName, imageUrl } = req.body;
        const newFavorite = new FavoriteRecipe({ recipeId, recipeName, imageUrl });
        await newFavorite.save();
        res.status(201).json(newFavorite);
      } catch (error) {
        res.status(400).json({ error: 'Failed to save favorite' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.body;
        await FavoriteRecipe.findByIdAndDelete(id);
        res.status(200).json({ message: 'Favorite deleted successfully' });
      } catch (error) {
        res.status(400).json({ error: 'Failed to delete favorite' });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
