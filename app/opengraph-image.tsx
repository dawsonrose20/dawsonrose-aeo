import { ImageResponse } from "next/og";

export const alt = "Sparkbilt | Answer Engine Optimization for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          padding: "60px",
        }}
      >
        <svg
          width="320"
          height="320"
          viewBox="0 0 96 96"
          fill="none"
          style={{ marginRight: 48 }}
        >
          <g transform="translate(48, 48)">
            <path d="M 0,-32 L 4,0 L 0,32 L -4,0 Z" fill="#c83838" />
            <path d="M -32,0 L 0,4 L 32,0 L 0,-4 Z" fill="#c83838" />
            <path
              d="M 0,-20 L 2.5,0 L 0,20 L -2.5,0 Z"
              transform="rotate(45)"
              fill="#c83838"
              opacity="0.5"
            />
            <path
              d="M 0,-20 L 2.5,0 L 0,20 L -2.5,0 Z"
              transform="rotate(-45)"
              fill="#c83838"
              opacity="0.5"
            />
            <circle r="2.4" fill="#0c1018" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 150,
              fontWeight: 900,
              letterSpacing: -6,
              color: "#0F172A",
              lineHeight: 1,
            }}
          >
            SPARKBILT
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#7F1D1D",
              fontWeight: 700,
              marginTop: 20,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Answer Engine Optimization
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
