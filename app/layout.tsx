import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blind Merit Engine",
  description: "Skill-based merit evaluation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
