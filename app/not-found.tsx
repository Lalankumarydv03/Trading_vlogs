import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container prose-page">
      <span className="eyebrow">404 · Page not found</span>
      <h1>This page isn’t on our chart.</h1>
      <p>The page may have moved, or the link may be incorrect. Head back to the article library and continue exploring.</p>
      <Link className="button" href="/blog">Browse articles ↗</Link>
    </main>
  );
}