"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/" className={pathname === "/" ? "text-yellow-400" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "text-yellow-400" : ""}>About</Link>
          <Link href="/projects" className={pathname === "/projects" ? "text-yellow-400" : ""}>Projects</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-yellow-400" : ""}>Contact</Link>
          <Link href="/skills" className={pathname === "/contact" ? "text-yellow-400" : ""}>Skills</Link>
        </div>
      </div>
    </nav>
  );
}
