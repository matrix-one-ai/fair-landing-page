import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import PrivyProviderWrapper from "./components/PrivyProviderWrapper";

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
        <PrivyProviderWrapper>
          {children}
          {modal}
        </PrivyProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
