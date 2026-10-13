import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Trading Vlogs — Learn the Markets",
    template: "%s | Trading Vlogs"
  },
  description: "Clear, thoughtful guides to stock-market basics, trading concepts, technical analysis, and risk management.",
  openGraph: {
    title: "Trading Vlogs — Learn the Markets",
    description: "Clear, thoughtful guides for curious market learners.",
    type: "website",
    siteName: "Trading Vlogs"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}