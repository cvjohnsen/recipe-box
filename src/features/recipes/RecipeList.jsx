import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <div className="card-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;