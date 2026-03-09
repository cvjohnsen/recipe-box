import { useEffect, useState } from "react";
import recipeData from "../features/recipes/recipeData";
import RecipeList from "../features/recipes/RecipeList";

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecipes(recipeData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <h2>Recipes</h2>
      <p>Browse your saved recipes.</p>
      {loading ? <p>Loading recipes...</p> : <RecipeList recipes={recipes} />}
    </section>
  );
}

export default RecipesPage;