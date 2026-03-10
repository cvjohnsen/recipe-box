import RecipeCard from "./RecipeCard";
import Card from "../../shared/Card";

function RecipeList({ recipes, onDelete, onToggleFavorite, onEdit }) {
  if (recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <div className="card-grid">
      {recipes.map((recipe) => (
        <Card key={recipe.id}>
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onToggleFavorite={onToggleFavorite}
          onEdit={onEdit}
        />
        </Card>
      ))}
    </div>
  );
}

export default RecipeList;