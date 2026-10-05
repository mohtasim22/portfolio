import type { Metadata } from "next";
import { Gabarito, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteUrl } from "@/lib/site-url";
import { site } from "@/data/site";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-gabarito",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const description =
  "Got an app idea? I'm a full-stack developer in Dhaka who builds, launches and fixes web apps with Next.js, Express and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohtasim Fahim · Full-stack developer",
    template: "%s · Mohtasim Fahim",
  },
  description,
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Mohtasim Fahim · Full-stack developer",
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${gabarito.variable} ${manrope.variable} motion-safe:scroll-smooth`}
    >
      <body className="bg-page text-ink antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
