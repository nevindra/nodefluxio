import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

interface OGImageProps {
  title: string;
  description?: string;
  badge?: string;
}

const fontFiles: Record<number, string> = {
  500: "PlusJakartaSans-Medium.ttf",
  700: "PlusJakartaSans-Bold.ttf",
};

async function loadFont(weight: number): Promise<ArrayBuffer> {
  const fontFile = fontFiles[weight];
  if (!fontFile) throw new Error(`Font weight ${weight} not available`);

  const fontPath = join(process.cwd(), "public", "fonts", fontFile);
  const buffer = await readFile(fontPath);
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

export async function generateOGImage({
  title,
  description,
  badge,
}: OGImageProps) {
  const [medium, bold] = await Promise.all([
    loadFont(500),
    loadFont(700),
  ]);

  const fontSize = title.length > 60 ? 42 : title.length > 40 ? 48 : 56;
  const truncatedDesc = description
    ? description.length > 130
      ? description.slice(0, 127) + "..."
      : description
    : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          backgroundColor: "#09090b",
          fontFamily: "Plus Jakarta Sans",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple gradient glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          }}
        />
        {/* Subtle glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Top content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                color: "#a78bfa",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.15em",
              }}
            >
              NODEFLUX
            </span>
          </div>

          {/* Accent line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundImage:
                "linear-gradient(to right, #8b5cf6, transparent)",
              marginBottom: "32px",
              borderRadius: "2px",
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              maxWidth: "900px",
              marginBottom: "20px",
            }}
          >
            {title}
          </div>

          {/* Description */}
          {truncatedDesc && (
            <div
              style={{
                fontSize: "20px",
                color: "#a1a1aa",
                lineHeight: 1.5,
                maxWidth: "750px",
                fontWeight: 500,
              }}
            >
              {truncatedDesc}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#52525b",
              fontSize: "18px",
              fontWeight: 500,
            }}
          >
            nodeflux.ai
          </span>

          {badge && (
            <span
              style={{
                backgroundColor: "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.25)",
                color: "#a78bfa",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: medium,
          weight: 500,
          style: "normal" as const,
        },
        {
          name: "Plus Jakarta Sans",
          data: bold,
          weight: 700,
          style: "normal" as const,
        },
      ],
    },
  );
}
