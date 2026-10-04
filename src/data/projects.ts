export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  codeUrl: string;
  color: "blue" | "yellow" | "green";
  art: "call" | "calendar" | "tracking";
};

export const projects: Project[] = [
  {
    slug: "tutorspace",
    name: "TutorSpace",
    summary:
      "Find a tutor, pay, and learn live with video and a shared whiteboard. AI makes practice quizzes from your course PDFs.",
    tags: ["Next.js", "Prisma", "Stripe"],
    liveUrl: "https://tutorspace-psi.vercel.app",
    codeUrl: "https://github.com/mohtasim22/TutorSpace",
    color: "blue",
    art: "call",
  },
  {
    slug: "framerent",
    name: "FrameRent",
    summary:
      "Rent cameras and lenses by the day. Two people can never book the same lens for the same weekend.",
    tags: ["React", "PostgreSQL", "67 tests"],
    liveUrl: "https://frame-rent-web.vercel.app",
    codeUrl: "https://github.com/mohtasim22/frame_rent",
    color: "yellow",
    art: "calendar",
  },
  {
    slug: "dispatch",
    name: "Dispatch",
    summary:
      "Send a parcel anywhere in Bangladesh and watch it move. Separate dashboards for customers, riders and admins.",
    tags: ["React", "MongoDB", "SSLCommerz"],
    liveUrl: "https://dispatch-iota-six.vercel.app",
    codeUrl: "https://github.com/mohtasim22/dispatch",
    color: "green",
    art: "tracking",
  },
];
