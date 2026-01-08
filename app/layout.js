import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner by Tumala | Cozy Online Bookstore",
  description:
    "The Cozy Corner by Tumala is a cozy online bookstore featuring book recommendations, relaxing vibes, and a welcoming reading space.",
  keywords: ["cozy bookstore", "online bookstore", "book recommendations", "cozy corner"],
  authors: [{ name: "Karyl Kaye Tumala" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="3s6XBJ3VfdmzmZHRgBCwIT5U-5Pg30GbSlk2KGquhCU"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <header
          className="border-b"
          style={{ backgroundColor: "var(--header-bg)" }}
        >
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <h1
              className="text-xl font-semibold"
              style={{ color: "var(--header-text)" }}
            >
              <Link href="/">The Cozy Corner</Link>
            </h1>
            <nav
              className="space-x-4 text-sm"
              style={{ color: "var(--header-text)" }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/books">Books</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6">{children}</main>

        <footer
          className="text-center text-sm py-6"
          style={{ backgroundColor: "var(--footer-bg)", color: "var(--footer-text)" }}
        >
          © 2026 The Cozy Corner by Karyl Kaye Tumala
        </footer>
      </body>
    </html>
  );
}
