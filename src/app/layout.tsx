import type { Metadata } from "next";
import { Gabarito, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-gabarito",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Mohtasim Fahim · Full-stack developer",
  description: "I build web apps with Next.js, Express and PostgreSQL.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
