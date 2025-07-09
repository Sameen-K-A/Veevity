import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/others/Navbar";
import Footer from "@/components/others/Footer";

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
      <body className="min-h-screen" suppressHydrationWarning={true}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
