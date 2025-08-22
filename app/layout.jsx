import Link from "next/link";

export const metadata = {
  title: "Desert Aromas",
  description: "Luxury Arabic Perfumes - Desert Aromas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-neutral-950 text-white py-4 px-6 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gold">Desert Aromas</Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-gold transition">Home</Link>
              <Link href="/collections" className="hover:text-gold transition">Collections</Link>
              <Link href="/about" className="hover:text-gold transition">About</Link>
              <Link href="/contact" className="hover:text-gold transition">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-neutral-950 text-gray-400 text-center py-6 mt-10">
          <p>&copy; {new Date().getFullYear()} Desert Aromas. All rights reserved.</p>
          <p className="mt-2">
            Follow us on{" "}
            <a href="https://www.tiktok.com/desertaromas" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              TikTok
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
