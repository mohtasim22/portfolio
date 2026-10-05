import { ImageResponse } from "next/og";
import { getProject, projects } from "@/data/projects";
import { loadGoogleFont } from "@/lib/og-font";

export const alt = "A project case study by Mohtasim Fahim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const palette = {
  blue: { bg: "#2f4bff", fg: "#ffffff" },
  yellow: { bg: "#ffc531", fg: "#15161f" },
  green: { bg: "#19c495", fg: "#15161f" },
};

const pill = {
  display: "flex",
  padding: "8px 18px",
  background: "#ffffff",
  color: "#15161f",
  border: "3px solid #15161f",
  borderRadius: 999,
  fontFamily: "Gabarito",
  fontWeight: 800,
  fontSize: 24,
};

// Build one image per project ahead of time, like the pages
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return new Response("Not found", { status: 404 });

  const colors = palette[project.color];
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
          background: colors.bg,
          color: colors.fg,
          fontFamily: "Manrope",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={pill}>Case study</div>
          <div style={{ display: "flex", fontFamily: "Gabarito", fontWeight: 800, fontSize: 30 }}>mohtasim</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontFamily: "Gabarito", fontWeight: 800, fontSize: 132, lineHeight: 1, letterSpacing: "-0.04em" }}>
            {project.name}
          </div>
          <div style={{ display: "flex", maxWidth: 960, fontSize: 34, lineHeight: 1.35 }}>{project.summary}</div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {project.tags.map((tag) => (
            <div key={tag} style={{ ...pill, boxShadow: "4px 4px 0 #15161f" }}>
              {tag}
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
