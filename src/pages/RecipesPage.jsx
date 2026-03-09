import { useEffect, useState } from "react";
import recipeData from "../features/recipes/recipeData";
import RecipeList from "../features/recipes/RecipeList";
import RecipeForm from "../features/recipes/RecipeForm";

const initialFormData = {
  title: "",
  category: "",
  ingredients: "",
  instructions: "",
};

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  function handleDelete(id) {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setRecipes(recipeData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.category.trim() ||
      !formData.ingredients.trim() ||
      !formData.instructions.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    const newRecipe = {
      id: crypto.randomUUID(),
      title: formData.title,
      category: formData.category,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      favorite: false,
    };

    setRecipes((currentRecipes) => [newRecipe, ...currentRecipes]);
    setFormData(initialFormData);
    setError("");
  }

  return (
    <section>
      <h2>Recipes</h2>
      <p>Browse your saved recipes and add your own.</p>

      <RecipeForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <RecipeList recipes={recipes} onDelete={handleDelete} />
      )}
    </section>
  );
}

export default RecipesPage;