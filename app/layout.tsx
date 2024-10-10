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

const Neu = localFont({
  src: [
    { path: "./fonts/PPNeueMontreal-Book.otf", weight: "400", style: "normal" },
    {
      path: "./fonts/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/PPNeueMontreal-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/PPNeueMontreal-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neu",
});

export const metadata: Metadata = {
  title: "Kitt",
  description:
    "At Kitt, we’re reimagining the $1.5Tn business travel experience. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${Neu.variable}  antialiased font-neu font-medium`}>
        {children}
      </body>
    </html>
  );
}
