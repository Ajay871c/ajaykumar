import Link from "next/link";

export default function Custom404() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <span>Sorry, the page you’re looking for doesn’t exist.</span>
      <Link href="/" className="home-link">
        Go back home
      </Link>
    </div>
  );
}
