// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Netciples — Reliable IT Solutions",
  description:
    "Managed IT, Cloud, Cybersecurity, and Consulting for growing businesses.",
  metadataBase: new URL("https://netciples.example.com"),
  openGraph: {
    title: "Netciples — Reliable IT Solutions",
    description:
      "Managed IT, Cloud, Cybersecurity, and Consulting for growing businesses.",
    url: "https://netciples.example.com",
    siteName: "Netciples",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
