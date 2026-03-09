import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section>
      <h2>Page Not Found</h2>
      <p>Sorry, we couldn’t find that page.</p>
      <Link to="/">Go back home</Link>
    </section>
  );
}

export default NotFoundPage;