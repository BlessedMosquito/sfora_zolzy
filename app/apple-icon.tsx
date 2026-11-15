import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same paw as app/icon.svg; iOS rounds the corners itself, so the background
// is a full square.
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#ede8d0",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <svg fill="#171717" height="140" viewBox="0 0 64 64" width="140">
        <ellipse
          cx="17"
          cy="30"
          rx="5"
          ry="6.5"
          transform="rotate(-25 17 30)"
        />
        <ellipse cx="26" cy="19" rx="5" ry="7" transform="rotate(-8 26 19)" />
        <ellipse cx="38" cy="19" rx="5" ry="7" transform="rotate(8 38 19)" />
        <ellipse cx="47" cy="30" rx="5" ry="6.5" transform="rotate(25 47 30)" />
        <path d="M32 32c-6.5 0-14 9-14 15.5 0 5 4.2 7.4 8.5 6.4 2.2-.5 3.8-1.1 5.5-1.1s3.3.6 5.5 1.1c4.3 1 8.5-1.4 8.5-6.4C46 41 38.5 32 32 32z" />
      </svg>
    </div>,
    { ...size },
  );
}
