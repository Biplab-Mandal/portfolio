"use client";

import { useEffect, useState } from "react";

import Container from "./container";
import navLinks from "./nav-links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50">
      <Container>
        <nav
          className={`
            mx-auto
            flex
            max-w-[920px]
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            backdrop-blur-xl
            transition-all
            duration-500

            ${
              scrolled
                ? "bg-slate-900/90 py-2 shadow-[0_15px_45px_rgba(0,0,0,.45)]"
                : "bg-slate-900/70 py-3 shadow-[0_10px_30px_rgba(0,0,0,.25)]"
            }

            px-4
            sm:px-8
          `}
        >
          {/* Nav Links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8 lg:gap-10">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="
                    group
                    relative
                    text-sm
                    font-medium
                    text-slate-300
                    transition
                    hover:text-cyan-400
                  "
                >
                  {item.label}

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      w-0
                      bg-cyan-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}