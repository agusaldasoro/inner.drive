import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Inner Drive · Programación para atletas de CrossFit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0d0f",
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "sans-serif",
        }}
      >
        {/* IN monogram + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 36 }}>
          <svg width="52" height="52" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#0d0d0f" />
            <rect x="7" y="15" width="13" height="70" fill="#ffffff" />
            <polygon points="24,85 90,15 90,85" fill="#ffffff" />
          </svg>
          <span
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            INNER DRIVE
          </span>
        </div>

        {/* Red accent */}
        <div
          style={{
            width: 56,
            height: 3,
            background: "#dc2626",
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Programación online para atletas de CrossFit y fitness competitivo.
        </p>
      </div>
    ),
    { ...size },
  );
}
