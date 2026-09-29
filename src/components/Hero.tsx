"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        el.style.transform = `translateY(${y * 0.15}px)`;
        el.style.opacity = String(1 - y / (window.innerHeight * 0.9));
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-orb hero__bg-orb--1" aria-hidden="true" />
      <div className="hero__bg-orb hero__bg-orb--2" aria-hidden="true" />

      <div className="hero__content" ref={contentRef}>
        <p className="hero__greeting hero-anim" style={{ animationDelay: "0.2s" }}>
          Hello, I&apos;m
        </p>
        <h1 className="hero__name hero-anim" style={{ animationDelay: "0.45s" }}>
          {/* PLACEHOLDER: Replace with full name */}
          Kosi Kyrian
        </h1>
        <p className="hero__tagline hero-anim" style={{ animationDelay: "0.7s" }}>
          Data Scientist <span className="accent">|</span> Backend Engineer
        </p>
        <p className="hero__description hero-anim" style={{ animationDelay: "0.9s" }}>
          {/* PLACEHOLDER: Replace with a short intro (1-2 sentences) */}
          I turn raw data into actionable insights and build the backend
          systems that power them. Passionate about data analysis, scalable
          APIs, and letting numbers tell their story.
        </p>
        <div className="hero__actions hero-anim" style={{ animationDelay: "1.1s" }}>
          <Link href="#projects" className="btn btn--primary magnetic">
            View My Work
          </Link>
          <Link href="#contact" className="btn btn--outline magnetic">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
