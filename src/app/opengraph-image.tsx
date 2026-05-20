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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(220,38,38,0.15)",
            filter: "blur(80px)",
          }}
        />
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#ef4444",
            margin: 0,
            marginBottom: 24,
          }}
        >
          Inner Drive
        </p>
        <p
          style={{
            fontSize: 72,
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 0.95,
            margin: 0,
            marginBottom: 32,
          }}
        >
          Base sólida.{"\n"}Resultado real.
        </p>
        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          Programación online para atletas de CrossFit y fitness competitivo.
        </p>
      </div>
    ),
    { ...size },
  );
}
