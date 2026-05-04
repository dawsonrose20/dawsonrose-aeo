import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Sparkbilt | Answer Engine Optimization for Local Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconBuffer = await readFile(join(process.cwd(), "app", "icon.png"));
  const iconDataUrl = `data:image/png;base64,${iconBuffer.toString("base64")}`;

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
        <img
          src={iconDataUrl}
          alt=""
          width={320}
          height={297}
          style={{ marginRight: 48 }}
        />
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
