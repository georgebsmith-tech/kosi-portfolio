import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/data/projects";

export const alt = "Project by Kosi Kyrian";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProjectOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Project";
  const description = project?.description ?? "";
  const tags = project?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(201, 168, 124, 0.06)",
            filter: "blur(80px)",
            bottom: "-100px",
            left: "-50px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            fontSize: "28px",
            fontWeight: 700,
            color: "#f0ece2",
            display: "flex",
          }}
        >
          KK
          <span style={{ color: "#c9a87c" }}>.</span>
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a87c",
            marginBottom: "16px",
          }}
        >
          Project
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#f0ece2",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#9a9590",
            lineHeight: 1.5,
            maxWidth: "800px",
            marginBottom: "32px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "12px" }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: "14px",
                color: "#c9a87c",
                border: "1px solid rgba(201, 168, 124, 0.3)",
                borderRadius: "20px",
                padding: "6px 18px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background:
              "linear-gradient(to right, transparent, #c9a87c, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
