import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "1.5px solid #c9b89a",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 12,
            fontFamily: "serif",
            color: "#7a6142",
          }}
        >
          R&amp;E
        </div>
      </div>
    ),
    { ...size }
  );
}
