import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — Personal Portfolio`,
  description: profile.bio[0] || `The personal portfolio of ${profile.name}, based in ${profile.location}.`,
  authors: [{ name: profile.name }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
