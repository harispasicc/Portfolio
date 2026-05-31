import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { THEME_BOOTSTRAP_SCRIPT } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f8f9fd",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mauve-nu-57.vercel.app"),
  title: "Haris Pašić — Frontend Software Engineer",
  description:
    "Frontend engineer building scalable React, TypeScript and AI-powered SaaS products.",
  openGraph: {
    title: "Haris Pašić — Frontend Software Engineer",
    description:
      "Production-focused web applications with clean architecture, performance, and strong product UX.",
    type: "website",
    url: "https://portfolio-mauve-nu-57.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      id="top"
      lang="en"
      className={`${geistSans.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--fg)] antialiased transition-colors duration-200">
        <Script id="theme-boot" strategy="beforeInteractive">
          {THEME_BOOTSTRAP_SCRIPT}
        </Script>
        <ThemeProvider>
          <div
            className="pointer-events-none fixed inset-0 -z-30 bg-[var(--bg)] transition-colors duration-200"
            aria-hidden
          />
          <div
            className="pointer-events-none fixed inset-0 -z-20 overflow-hidden transition-opacity duration-200"
            aria-hidden
          >
            <div className="absolute -top-[32%] right-[-18%] h-[min(48rem,120vw)] w-[min(48rem,120vw)] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_12%,transparent),transparent)] blur-[100px] opacity-75" />
            <div className="absolute top-[22%] right-[6%] h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_8%,transparent),transparent)] blur-[90px] opacity-55" />
            <div className="absolute bottom-[-38%] left-[-24%] h-[min(42rem,110vw)] w-[min(42rem,110vw)] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--fg)_5%,transparent),transparent)] blur-[110px] opacity-60" />
          </div>
          <div className="relative z-10 min-h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
