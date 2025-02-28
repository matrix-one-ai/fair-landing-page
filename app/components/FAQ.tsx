import React from "react";
import { FAQs } from "@/app/constants";
import Card from "./Card/Card";

const FAQ = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center">
      <p className="font-bold text-center text-4xl uppercase m-14">FAQs</p>
      <div className="w-full max-w-[850px] flex flex-col gap-6">
        {FAQs.map((faq, index) => (
          <Card key={`faq-${index}`} title={faq.title}>
            <div
              className="flex flex-col gap-0.5"
              dangerouslySetInnerHTML={{ __html: faq.content }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
