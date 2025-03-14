"use client";

import { Widget } from "@typeform/embed-react";
import Header from "@/app/components/Header";

export default function Page() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <Header />
      <div className="flex w-full h-0 flex-grow">
        <Widget id="TtFYpp0H" className="w-full h-full" />
      </div>
    </main>
  );
}
