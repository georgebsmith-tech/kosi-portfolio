"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-4px) perspective(600px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = "";
  }, []);

  return (
    <article
      className="project-card reveal"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card__number">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-card__links">
        <Link href={`/projects/${project.slug}`}>View Details &#8599;</Link>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub &#8599;
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__header reveal">
        <span className="section__number">03</span>
        <h2 className="section__title">Featured Projects</h2>
        <div className="section__line" />
      </div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
