'use client';

export default function Error({ error, reset }) {
  return (
    <div className="not-found">
      <h1>500 - Page Not Found</h1>
      <p>There is no post with this slug you are requesting</p>
      <a href="/" className="home-link">Return to homepage</a>
    </div>
  );
}
