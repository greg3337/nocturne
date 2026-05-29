import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#08080A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            right: 3,
            bottom: 3,
            border: "1px solid rgba(201,168,76,0.55)",
            display: "flex",
          }}
        />
        <span
          style={{
            color: "#C9A84C",
            fontSize: 20,
            fontWeight: 300,
            letterSpacing: "0.05em",
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  );
}
