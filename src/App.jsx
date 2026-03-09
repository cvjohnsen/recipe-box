import { Routes, Route } from "react-router-dom";
import Layout from "./shared/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;