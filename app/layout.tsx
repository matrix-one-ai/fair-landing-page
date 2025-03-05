import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FAIR Frameworks for (human) and AI runtime",
  description: "Deploy, launch and automate and crypto team",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center justify-center">
          <Header />
          {children}
          <Footer />
          {modal}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
