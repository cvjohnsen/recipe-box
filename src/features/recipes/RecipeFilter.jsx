function RecipeFilter({
  selectedCategory,
  showFavoritesOnly,
  onCategoryChange,
  onFavoritesChange,
}) {
  return (
    <section className="filter-bar">
      <div className="filter-group">
        <label htmlFor="categoryFilter">Filter by Category</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div className="filter-checkbox">
        <label htmlFor="favoritesOnly">
          <input
            id="favoritesOnly"
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={onFavoritesChange}
          />
          Favorites only
        </label>
      </div>
    </section>
  );
}

export default RecipeFilter;