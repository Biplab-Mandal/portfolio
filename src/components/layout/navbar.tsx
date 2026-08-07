"use client";

import Link from "next/link";
import Container from "./container";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold tracking-wide"
          >
            BM.
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </nav>
      </Container>
    </header>
  );
}