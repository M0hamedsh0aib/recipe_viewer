// src/pages/index.js
import axios from 'axios';
import Link from 'next/link';

export async function getServerSideProps() {
  const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return { props: { recipes: res.data.meals || [] } };
}

export default function Home({ recipes }) {
  return (
    <div className="container">
      <h1>Recipe Viewer</h1>
      <div className="grid">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <Link href={`/recipe/${recipe.idMeal}`}>
              <a>View Recipe</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
