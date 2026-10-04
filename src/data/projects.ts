export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  codeUrl: string;
  color: "blue" | "yellow" | "green";
  art: "call" | "calendar" | "tracking";
  caseStudy: {
    overview: string;
    problem: string;
    built: string[];
    hardest: { title: string; text: string; code?: string };
    stack: string[];
    screenshots?: { src: string; alt: string }[];
    demoLogins?: { role: string; email: string; password: string }[];
  };
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
    caseStudy: {
      overview:
        "A tutoring marketplace and course platform. Students find verified tutors, book and pay for sessions, join live lessons and complete coursework in one place.",
      problem:
        "Finding a tutor, paying, attending the lesson and getting coursework usually happen in four different apps. I wanted one place for all of it, for students, tutors and the people running the platform.",
      built: [
        "Tutor search with subject and price filters, and slot booking that respects class capacity",
        "Stripe checkout in BDT with verified webhooks, and refunds based on how early a session is cancelled",
        "Live lessons with Daily.co video and a tldraw whiteboard that tutors can save as course material",
        "Assignments with file uploads, grading and feedback, plus announcements and an event calendar",
        "AI practice quizzes and summaries generated from course PDFs with the Claude API",
        "An admin dashboard for tutor verification, course oversight and earnings",
      ],
      hardest: {
        title: "Who is allowed in?",
        text: "Access depends on payment. Only a student with a paid booking can join the video call or use the AI tools, and the refund amount depends on how early a session is cancelled. I made verified Stripe webhooks the only source of truth for payment state, so nothing sent from the browser can unlock a lesson.",
      },
      stack: [
        "Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Better Auth",
        "Express 5", "Prisma 7", "PostgreSQL", "Stripe", "Daily.co", "tldraw", "Cloudinary", "Claude API",
      ],
      screenshots: [
  { src: "/projects/tutorspace/home.png", alt: "TutorSpace landing page: find the right tutor for your learning journey" },
  { src: "/projects/tutorspace/tutors.png", alt: "Tutor list with search, rating and course filters, verified badges and hourly prices in taka" },
],

    },
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
    caseStudy: {
      overview:
        "A camera and lens rental shop. Customers check availability, book a date range and pay a deposit. Staff manage every physical unit from an admin console with an occupancy calendar.",
      problem:
        "If two people book the last copy of a lens for overlapping dates at the same moment, a simple \"check, then insert\" lets both bookings through. One of them shows up to an empty shelf.",
      built: [
        "Per-unit inventory, so the shop tracks each physical camera instead of a stock count",
        "Booking inside one database transaction that locks the candidate units before assigning one",
        "Stripe deposits held as authorizations, with webhooks as the single source of truth for payment",
        "Unpaid bookings that expire after 30 minutes, so nobody can hold gear forever",
        "Zod schemas shared between the React client and the Express API",
        "An admin console with an occupancy grid and calendar",
        "67 automated tests with Vitest",
      ],
      hardest: {
        title: "Two bookings, one lens",
        text: "Checking availability and then inserting a booking leaves a gap where a second request can slip in. I run the whole booking in one transaction and lock the candidate units first, so a second request waits until the first one finishes and then sees the unit is taken.",
        code: `-- inside the booking transaction (simplified)
SELECT id FROM "Unit"
WHERE "productId" = $1
FOR UPDATE;  -- a second booking waits here`,
      },
      stack: [
        "React 19", "Vite", "React Router", "TanStack Query", "Zustand", "Tailwind CSS",
        "Express 5", "Prisma 7", "PostgreSQL", "Better Auth", "Stripe", "Zod", "Vitest",
      ],
      screenshots: [
  { src: "/projects/framerent/home.png", alt: "FrameRent landing page: great glass, rented by the day" },
  { src: "/projects/framerent/product.png", alt: "Product page for a DJI RS 4 Pro with daily and weekly rates, deposit and a rental date calendar" },
],

    },
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
    caseStudy: {
      overview:
        "A parcel delivery platform for Bangladesh with separate dashboards for customers, riders and admins.",
      problem:
        "A delivery app has three kinds of users who must never see or change each other's data. It also has a price that a customer could edit in the browser if the server trusted it.",
      built: [
        "Parcel booking with delivery prices calculated only on the server",
        "Online payment through SSLCommerz, with payment callbacks that are safe to receive twice",
        "A public tracking page for any parcel",
        "Rider applications with license uploads, reviewed and approved by admins",
        "Role checks on every API route for customers, riders and admins",
        "Search and filters for orders",
      ],
      hardest: {
        title: "Never trust the browser",
        text: "Anything the browser sends can be edited, so the server recalculates the delivery price from the parcel details and checks the caller's role on every request. Payment callbacks are idempotent: if SSLCommerz sends the same confirmation twice, the parcel is only marked as paid once.",
      },
      stack: [
        "React 19", "Vite", "Tailwind CSS", "daisyUI", "TanStack Query", "Axios",
        "Node.js", "Express", "MongoDB", "Firebase Auth", "SSLCommerz", "Cloudinary",
      ],
      screenshots: [
  { src: "/projects/dispatch/home.png", alt: "Dispatch landing page with a parcel tracking timeline from booked to delivered" },
  { src: "/projects/dispatch/coverage.png", alt: "Coverage page listing delivery areas in all eight divisions of Bangladesh" },
],

    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
