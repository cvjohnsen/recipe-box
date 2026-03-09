function RecipeCard({ recipe }) {
  return (
    <article className="card">
      <h3>{recipe.title}</h3>
      <p>
        <strong>Category:</strong> {recipe.category}
      </p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients}
      </p>
      <p>
        <strong>Instructions:</strong> {recipe.instructions}
      </p>
      <p>{recipe.favorite ? "⭐ Favorite" : "Not Favorite"}</p>
    </article>
  );
}

export default RecipeCard;