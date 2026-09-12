import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blind Merit & Skill Evaluation Portal | Ministry of AYUSH",
  description:
    "National Industry-Academia Collaborative Skill Portal — Objective, pedigree-free recruitment for the AYUSH ecosystem. SIH-26044 / Control_Alt_Defend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Public Sans + Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Public+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface">
        {children}
      </body>
    </html>
  );
}
