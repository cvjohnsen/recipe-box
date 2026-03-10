import { useCallback, useEffect, useState } from "react";
import recipeData from "../features/recipes/recipeData";
import RecipeList from "../features/recipes/RecipeList";
import RecipeForm from "../features/recipes/RecipeForm";
import RecipeFilter from "../features/recipes/RecipeFilter";

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
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  function handleDelete(id) {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  }

  function handleToggleFavorite(id) {
    setRecipes((currentRecipes) =>
      currentRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, favorite: !recipe.favorite }
          : recipe
      )
    );
  }

  function handleEdit(id) {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);

    if (!recipeToEdit) return;

    setFormData({
      title: recipeToEdit.title,
      category: recipeToEdit.category,
      ingredients: recipeToEdit.ingredients,
      instructions: recipeToEdit.instructions,
    });

    setEditingId(id);
    setError("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedRecipes = localStorage.getItem("recipes");

      if (savedRecipes) {
        setRecipes(JSON.parse(savedRecipes));
      } else {
        setRecipes(recipeData);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes, loading]);

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

    if (editingId) {
      setRecipes((currentRecipes) =>
        currentRecipes.map((recipe) =>
          recipe.id === editingId
            ? {
                ...recipe,
                title: formData.title,
                category: formData.category,
                ingredients: formData.ingredients,
                instructions: formData.instructions,
              }
            : recipe
        )
      );

      setEditingId(null);
    } else {
      const newRecipe = {
        id: crypto.randomUUID(),
        title: formData.title,
        category: formData.category,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
        favorite: false,
      };

      setRecipes((currentRecipes) => [newRecipe, ...currentRecipes]);
    }

    setFormData(initialFormData);
    setError("");
  }

  const filteredRecipes = useCallback(() => {
    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === "All" || recipe.category === selectedCategory;

      const matchesFavorite = showFavoritesOnly ? recipe.favorite : true;

      return matchesCategory && matchesFavorite;
    });
  }, [recipes, selectedCategory, showFavoritesOnly]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFavoritesChange(event) {
    setShowFavoritesOnly(event.target.checked);
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
        editingId={editingId}
      />

      <RecipeFilter
        selectedCategory={selectedCategory}
        showFavoritesOnly={showFavoritesOnly}
        onCategoryChange={handleCategoryChange}
        onFavoritesChange={handleFavoritesChange}
      />

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <RecipeList
          recipes={filteredRecipes()}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
          onEdit={handleEdit}
        />
      )}
    </section>
  );
}

export default RecipesPage;