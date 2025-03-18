import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="container mx-auto px-6 py-10 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 bg-gray-800 text-white mt-10">
          <p className="text-sm">© {new Date().getFullYear()} Grace Boke. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
