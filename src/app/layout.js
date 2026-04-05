import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

// ── Single unified typeface: Inter
// Professional, formal, dense — used for all text at different weights.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

// ── Monospaced: JetBrains Mono for code/terminal only
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "C.O.D.E — Club of Developers and Engineers | MMCOE Pune",
    template: "%s — C.O.D.E | MMCOE",
  },
  description:
    "C.O.D.E is the exclusive technical club of MMCOE's Computer Engineering Department. Real consultancy projects, production software, and industry-ready engineers.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://code-mmcoe.tech",
    siteName: "C.O.D.E — MMCOE",
    title: "C.O.D.E — Club of Developers and Engineers",
    description: "Technical club of MMCOE's CS Department.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        <CustomCursor />

        {/* Full-page dot grid texture */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none texture-dot-grid"
          style={{ zIndex: -1, opacity: 0.55 }}
        />

        {/* Skip nav */}
        <a
          href="#main-content"
          className="absolute -top-full left-4 z-50 px-4 py-2 rounded text-sm font-medium focus:top-4 transition-all"
          style={{ background: "var(--accent-mint)", color: "var(--text-invert)" }}
        >
          Skip to main content
        </a>

        <Navbar />

        <main
          id="main-content"
          className="flex-grow flex flex-col w-full relative overflow-x-hidden"
          style={{ zIndex: 0 }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
