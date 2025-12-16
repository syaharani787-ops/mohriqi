import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOH RIQI FAUZI - Kedai Minuman Terbaik di Jember",
  description: "Selamat datang di MOH RIQI FAUZI, kedai minuman pilihan favorit di Jember! Nikmati berbagai minuman berkualitas dari kopi pilihan terbaik hingga jus segar yang menyehatkan.",
  keywords: ["MOH RIQI FAUZI", "kedai minuman", "kopi Jember", "jus segar", "Kedai Sumberbaru", "tempat nongkrong Jember", "coffee shop", "cafe"],
  authors: [{ name: "MOH RIQI FAUZI" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "MOH RIQI FAUZI - Kedai Minuman Terbaik di Jember",
    description: "Kedai minuman favorit di Jember dengan berbagai pilihan kopi, teh, jus, dan makanan ringan. WiFi gratis dan suasana nyaman.",
    url: "https://mohriqifauzi.com",
    siteName: "MOH RIQI FAUZI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOH RIQI FAUZI - Kedai Minuman Terbaik di Jember",
    description: "Kedai minuman favorit di Jember dengan WiFi gratis dan suasana nyaman",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
