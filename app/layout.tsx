import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Interactive quiz application with various categories",
  openGraph: {
    title: "Quiz App",
    description: "Interactive quiz application with various categories",
    type: "website",
    locale: "ja_JP",
    url: "https://quiz-app.example.com",
    siteName: "Quiz App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quiz App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz App",
    description: "Interactive quiz application with various categories",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
