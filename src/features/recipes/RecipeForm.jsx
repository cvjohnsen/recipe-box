function RecipeForm({ formData, onChange, onSubmit, error }) {
  return (
    <form className="recipe-form" onSubmit={onSubmit}>
      <h3>Add a Recipe</h3>

      <label htmlFor="title">Recipe Title</label>
      <input
        id="title"
        name="title"
        type="text"
        value={formData.title}
        onChange={onChange}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={onChange}
      >
        <option value="">Select a category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        id="ingredients"
        name="ingredients"
        value={formData.ingredients}
        onChange={onChange}
        rows="3"
      />

      <label htmlFor="instructions">Instructions</label>
      <textarea
        id="instructions"
        name="instructions"
        value={formData.instructions}
        onChange={onChange}
        rows="4"
      />

      {error ? <p className="form-error">{error}</p> : null}

      <button type="submit" className="submit-button">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;