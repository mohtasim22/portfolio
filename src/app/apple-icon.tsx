import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const gabarito = await loadGoogleFont("Gabarito", 800);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f4bff",
          color: "#ffffff",
          fontFamily: "Gabarito",
          fontWeight: 800,
          fontSize: 116,
        }}
      >
        M
      </div>
    ),
    { ...size, fonts: [{ name: "Gabarito", data: gabarito, weight: 800, style: "normal" }] },
  );
}
