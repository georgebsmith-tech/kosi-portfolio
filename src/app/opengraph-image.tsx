import { ImageResponse } from "next/og";

export const alt = "Kosi Kyrian — Data Scientist & Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(201, 168, 124, 0.08)",
            filter: "blur(80px)",
            top: "-100px",
            right: "-50px",
          }}
        />

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "60px",
            fontSize: "32px",
            fontWeight: 700,
            color: "#f0ece2",
            display: "flex",
          }}
        >
          KK
          <span style={{ color: "#c9a87c" }}>.</span>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9a87c",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f0ece2",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Kosi Kyrian
          </div>
          <div
            style={{
              fontSize: "28px",
              fontStyle: "italic",
              color: "#9a9590",
            }}
          >
            Data Scientist | Backend Engineer
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(to right, transparent, #c9a87c, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
