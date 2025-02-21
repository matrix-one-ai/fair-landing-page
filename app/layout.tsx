import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAMI",
  description: "SAMI - Matrix Agent",
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
        <main>
          {children}
          {modal}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
