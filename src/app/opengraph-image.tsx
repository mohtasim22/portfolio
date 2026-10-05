import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

export const alt = "Mohtasim Fahim, full-stack developer: Got an app idea? I'll build it, launch it and fix it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const words = [
  { text: "I'll" },
  { text: "build", bg: "#ff5a36" },
  { text: "it," },
  { text: "launch", bg: "#ffc531" },
  { text: "it" },
  { text: "and" },
  { text: "fix", bg: "#19c495" },
  { text: "it." },
];

const tiles = [
  { name: "Next.js", bg: "#2f4bff", fg: "#ffffff" },
  { name: "React", bg: "#ffc531", fg: "#15161f" },
  { name: "TypeScript", bg: "#ffffff", fg: "#15161f" },
  { name: "Express", bg: "#ff5a36", fg: "#15161f" },
  { name: "PostgreSQL", bg: "#19c495", fg: "#15161f" },
];

export default async function Image() {
  const [gabarito, manrope] = await Promise.all([
    loadGoogleFont("Gabarito", 800),
    loadGoogleFont("Manrope", 600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 72px",
          background: "#f5f6fc",
          color: "#15161f",
          fontFamily: "Manrope",
        }}
      >
        {/* Logo and role */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Gabarito", fontWeight: 800, fontSize: 34 }}>
            <div
              style={{
                width: 54,
                height: 54,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#2f4bff",
                color: "#ffffff",
                border: "4px solid #15161f",
                borderRadius: 14,
                transform: "rotate(-8deg)",
                fontSize: 28,
              }}
            >
              M
            </div>
            mohtasim
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#5d6070" }}>Full-stack developer · Dhaka</div>
        </div>

        {/* Headline: small question, then the highlighted answer */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", fontFamily: "Gabarito", fontWeight: 800, fontSize: 46, color: "#5d6070" }}>
            Got an app idea?
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 1000,
              fontFamily: "Gabarito",
              fontWeight: 800,
              fontSize: 88,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  marginRight: 22,
                  // ImageResponse breaks on undefined style values, so only add these when needed
                  ...(word.bg && {
                    padding: "0 12px",
                    background: word.bg,
                    borderRadius: 10,
                    transform: "rotate(-1deg)",
                  }),
                }}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>

        {/* Tech tiles */}
        <div style={{ display: "flex", gap: 14 }}>
          {tiles.map((tile) => (
            <div
              key={tile.name}
              style={{
                display: "flex",
                padding: "10px 18px",
                background: tile.bg,
                color: tile.fg,
                border: "3px solid #15161f",
                borderRadius: 14,
                boxShadow: "4px 4px 0 #15161f",
                fontFamily: "Gabarito",
                fontWeight: 800,
                fontSize: 26,
              }}
            >
              {tile.name}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Gabarito", data: gabarito, weight: 800, style: "normal" },
        { name: "Manrope", data: manrope, weight: 600, style: "normal" },
      ],
    },
  );
}
