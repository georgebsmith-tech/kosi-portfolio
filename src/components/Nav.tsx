"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <Link href="#hero" className="nav__logo" onClick={closeMenu}>
        {/* PLACEHOLDER: Replace with your name or initials */}
        KK<span className="accent">.</span>
      </Link>

      <button
        className={`nav__toggle${menuOpen ? " active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav__links${menuOpen ? " open" : ""}`}>
        <li><Link href="#about" onClick={closeMenu}>About</Link></li>
        <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
        <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
        <li>
          <Link href="/resume.pdf" className="nav__cta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</Link>
        </li>
      </ul>
    </nav>
  );
}
