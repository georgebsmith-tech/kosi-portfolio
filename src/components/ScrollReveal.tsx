"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // --- SCROLL REVEAL ---
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    // --- MAGNETIC BUTTONS ---
    const magnetics = document.querySelectorAll<HTMLElement>(".magnetic");
    const magneticHandlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    magnetics.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      };
      const leave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      magneticHandlers.set(btn, { move, leave });
    });

    // --- SKILL CARD GLOW ---
    const cards = document.querySelectorAll<HTMLElement>(".skill-card");
    const cardHandlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
      };
      const leave = () => {
        card.style.removeProperty("--glow-x");
        card.style.removeProperty("--glow-y");
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cardHandlers.set(card, { move, leave });
    });

    // --- CONTACT LINK HOVER SHIFT ---
    const contactLinks = document.querySelectorAll<HTMLElement>(".contact__link");
    const contactHandlers = new Map<HTMLElement, { enter: () => void; leave: () => void }>();

    contactLinks.forEach((link) => {
      const value = link.querySelector<HTMLElement>(".contact__link-value");
      const enter = () => {
        if (value) value.style.transform = "translateX(8px)";
      };
      const leave = () => {
        if (value) value.style.transform = "";
      };
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
      contactHandlers.set(link, { enter, leave });
    });

    return () => {
      observer.disconnect();
      magneticHandlers.forEach(({ move, leave }, btn) => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      });
      cardHandlers.forEach(({ move, leave }, card) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
      contactHandlers.forEach(({ enter, leave }, link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return null;
}
