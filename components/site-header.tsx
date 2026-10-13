"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const links = [
  { href: "/blog", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" }
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Trading Vlogs home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><TrendingUp size={21} strokeWidth={2.4} /></span>
          <span>trading<span className="brand-light">vlogs</span><small>LEARN THE MARKETS</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link className="nav-cta" href="/blog">Explore articles <span aria-hidden="true">↗</span></Link>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Explore articles ↗</Link>
        </nav>
      )}
    </header>
  );
}