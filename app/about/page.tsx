import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the educational mission behind Trading Vlogs."
};

export default function AboutPage() {
  return (
    <main className="container prose-page">
      <span className="eyebrow">About the publication</span>
      <h1>Learn the markets with clarity, not hype.</h1>
      <p>Trading Vlogs is an educational blog designed to make stock-market concepts easier to understand. The goal is to explain the language, mechanics, and risks of financial markets in clear English.</p>
      <h2>What you’ll find here</h2>
      <p>Articles cover market basics, risk management, technical analysis, and the habits that support thoughtful decision-making. Content is intended to help readers ask better questions and continue their own research.</p>
      <h2>Our editorial approach</h2>
      <p>We aim to be practical, careful with claims, and transparent about uncertainty. No strategy can guarantee profits, and an explanation should never replace independent research or advice suited to an individual’s circumstances.</p>
      <h2>Keep learning</h2>
      <p>
        Use the <Link href="/blog" style={{ color: "var(--green)", textDecoration: "underline" }}>article library</Link> as a starting point. Check dates on time-sensitive material and consult credible sources before making financial decisions.
      </p>
    </main>
  );
}