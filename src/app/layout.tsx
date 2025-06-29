import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/others/Navbar";

export const metadata: Metadata = {
  title: "Veevity",
  description: "You'll share your vision. We'll make it real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen" cz-shortcut-listen="true">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
