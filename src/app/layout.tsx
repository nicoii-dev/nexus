import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Arjohn Ely | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel. Building modern, scalable web and mobile applications.",
  keywords: [
    "Arjohn Ely",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Portfolio",
  ],
  openGraph: {
    title: "Arjohn Ely | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and Laravel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
