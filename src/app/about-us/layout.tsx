import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Veevity about-us",
  description: "Veevity about us section",
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