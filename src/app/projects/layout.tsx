import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Veevity projects",
  description: "Our latest project/ products",
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