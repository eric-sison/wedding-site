import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            width: "84%",
            height: "84%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            border: "3px solid #c9b89a",
            borderRadius: "50%",
            boxShadow: "0 6px 16px rgba(58,53,46,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontFamily: "serif",
              color: "#7a6142",
              letterSpacing: 2,
            }}
          >
            R&amp;E
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
