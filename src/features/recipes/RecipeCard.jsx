function RecipeCard({ recipe, onDelete }) {
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

      <button
        className="delete-button"
        onClick={() => onDelete(recipe.id)}
      >
        Delete
      </button>
    </article>
  );
}

export default RecipeCard;