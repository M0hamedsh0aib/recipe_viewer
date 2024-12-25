// src/pages/favorites.js
import axios from 'axios';

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/favorites`);
  return { props: { favorites: res.data } };
}

export default function Favorites({ favorites }) {
  return (
    <div className="container">
      <h1>Your Favorite Recipes</h1>
      <div className="grid">
        {favorites.map((favorite) => (
          <div key={favorite._id} className="card">
            <img src={favorite.imageUrl} alt={favorite.recipeName} />
            <h3>{favorite.recipeName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
