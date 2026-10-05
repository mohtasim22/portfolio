// The site's public address. On Vercel, VERCEL_PROJECT_PRODUCTION_URL is set
// automatically (your domain, without https://). Locally it falls back to localhost.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = vercelHost ? `https://${vercelHost}` : "http://localhost:3000";
