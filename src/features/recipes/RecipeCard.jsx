function RecipeCard({ recipe, onDelete, onToggleFavorite, onEdit }) {
  return (
    <article className="recipe-card">
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

      <div className="card-actions">
        <button
          className="favorite-button"
          onClick={() => onToggleFavorite(recipe.id)}
        >
          {recipe.favorite ? "Unfavorite" : "Favorite"}
        </button>

        <button className="edit-button" onClick={() => onEdit(recipe.id)}>
          Edit
        </button>

        <button className="delete-button" onClick={() => onDelete(recipe.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;