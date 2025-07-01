import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Veevity",
  description: "Start a new project with your vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
};