import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
        <main className="flex justify-center">
          {children}
          {modal}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
