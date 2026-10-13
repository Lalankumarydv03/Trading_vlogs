import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">↗</span>
            <span>trading<span className="brand-light">vlogs</span><small>LEARN THE MARKETS</small></span>
          </Link>
          <p className="footer-copy">Clear explanations for curious market learners.</p>
        </div>
        <div className="footer-links">
          <Link href="/blog">Articles</Link>
          <Link href="/about">About</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Trading Vlogs</span>
        <span>Learn thoughtfully. Manage risk.</span>
      </div>
    </footer>
  );
}