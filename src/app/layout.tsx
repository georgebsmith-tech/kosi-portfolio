import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// PLACEHOLDER: Replace with your actual deployed URL
const siteUrl = "https://kosikyrian.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kosi Kyrian — Data Scientist & Backend Engineer",
    template: "%s — Kosi Kyrian",
  },
  description:
    "Data Scientist & Backend Engineer based in Port Harcourt, Nigeria. Turning raw data into actionable insights, backed by strong backend engineering with Python, FastAPI, and PostgreSQL.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Backend Developer",
    "Python Developer",
    "Data Analysis",
    "Scikit-learn",
    "FastAPI",
    "PostgreSQL",
    "Port Harcourt",
    "Nigeria",
    "Kosi Kyrian",
  ],
  authors: [{ name: "Kosi Kyrian" }],
  creator: "Kosi Kyrian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kosi Kyrian — Portfolio",
    title: "Kosi Kyrian — Data Scientist & Backend Engineer",
    description:
      "Data Scientist & Backend Engineer turning raw data into actionable insights. Python, FastAPI, PostgreSQL, and data analysis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kosi Kyrian — Data Scientist & Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosi Kyrian — Data Scientist & Backend Engineer",
    description:
      "Data Scientist & Backend Engineer turning raw data into actionable insights.",
    images: ["/og-image.png"],
    // PLACEHOLDER: Replace with actual Twitter handle
    // creator: "@your_handle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
