import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Kosi Kyrian`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Kosi Kyrian`,
      description: project.description,
      type: "article",
      tags: project.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Kosi Kyrian`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <nav className="nav nav--scrolled">
        <Link href="/#hero" className="nav__logo">
          KK<span className="accent">.</span>
        </Link>
        <Link href="/#projects" className="project-detail__back">
          &#8592; All Projects
        </Link>
      </nav>

      <main className="project-detail">
        <header className="project-detail__header">
          <span className="project-detail__number">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__tagline">{project.description}</p>
          <div className="project-detail__meta">
            <div className="project-detail__meta-item">
              <span className="project-detail__meta-label">Role</span>
              <span className="project-detail__meta-value">{project.role}</span>
            </div>
            <div className="project-detail__meta-item">
              <span className="project-detail__meta-label">Year</span>
              <span className="project-detail__meta-value">{project.year}</span>
            </div>
            <div className="project-detail__meta-item">
              <span className="project-detail__meta-label">Stack</span>
              <span className="project-detail__meta-value">
                {project.tags.join(", ")}
              </span>
            </div>
          </div>
        </header>

        <section className="project-detail__body">
          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Overview</h2>
            <p className="project-detail__text">{project.longDescription}</p>
          </div>

          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Key Features</h2>
            <ul className="project-detail__features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail__section">
            <h2 className="project-detail__section-title">Technologies</h2>
            <div className="project-detail__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-detail__actions">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View on GitHub &#8599;
            </a>
            <Link href="/#projects" className="btn btn--outline">
              Back to Projects
            </Link>
          </div>
        </section>

        <nav className="project-detail__nav">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="project-detail__nav-link project-detail__nav-link--prev"
            >
              <span className="project-detail__nav-label">&#8592; Previous</span>
              <span className="project-detail__nav-title">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="project-detail__nav-link project-detail__nav-link--next"
            >
              <span className="project-detail__nav-label">Next &#8594;</span>
              <span className="project-detail__nav-title">{next.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </>
  );
}
