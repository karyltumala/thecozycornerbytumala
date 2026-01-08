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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50 text-zinc-800`}
      >
        <header className="border-b border-orange-200 bg-orange-100 shadow-sm">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <h1 className="text-2xl font-semibold text-orange-800 hover:text-orange-600 transition-colors">
              <Link href="/">The Cozy Corner</Link>
            </h1>
            <nav className="space-x-4 text-sm text-orange-700">
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
              <Link href="/books" className="hover:text-orange-500 transition-colors">Books</Link>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6">
          {children}
        </main>

        <footer className="text-center text-sm text-orange-700 py-6 bg-orange-100 border-t border-orange-200">
          © 2026 The Cozy Corner by Karyl Kaye Tumala
        </footer>
      </body>
    </html>
  );
}
