import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Rica & Eric — Save the Date, October 3, 2026, SG Farm, Tupi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photoData = await readFile(join(process.cwd(), "public/og-photo.jpg"));
const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f0e4",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 72,
          }}
        >
          <img
            src={photoSrc}
            width={360}
            height={382}
            style={{
              objectFit: "cover",
              borderRadius: 4,
              background: "white",
              padding: 12,
              boxShadow: "0 24px 50px rgba(58,53,46,0.3)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 10,
                color: "#7a6142",
                textTransform: "uppercase",
              }}
            >
              Save the Date
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 92,
                fontFamily: "serif",
                color: "#3a352e",
                marginTop: 8,
              }}
            >
              Rica &amp; Eric
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 36,
                fontFamily: "serif",
                fontStyle: "italic",
                color: "#3a352e",
                marginTop: 20,
              }}
            >
              October 3, 2026
            </div>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 4,
                color: "#6b6255",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              SG Farm, Tupi
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
