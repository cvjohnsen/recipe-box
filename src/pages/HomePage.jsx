import foodImage from "../assets/ingredient.jpg";

function HomePage() {
  return (
    <section className="home-page">
      <h2>Welcome to My Recipe Box</h2>

      <p>This app helps users save and organize favorite recipes.</p>

      <img
        src={foodImage}
        alt="Delicious homemade meal"
        className="home-image"
      />
    </section>
  );
}

export default HomePage;