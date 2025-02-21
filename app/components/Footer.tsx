import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full justify-between items-start gap-4 p-4 text-gray_secondary_text">
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <div className="border-dashed border-gray_secondary_text border-2 rounded-md font-extrabold text-2xl px-1.5 pt-3 pb-1.5 w-fit">
            <span className="mr-[2em]">F</span>
            <span className="mr-[2em]">A</span>
            <span className="mr-[2em]">I</span>
            <span>R</span>
          </div>
          <p className="mt-4">Framework for (Human) and AI Runtime</p>
          <p className="mt-2">FAIR, 2025.</p>
        </div>
        <div className="flex w-full md:w-0 md:flex-grow md:max-w-[500px] justify-between gap-4 flex-wrap">
          <Link href="/" className="justify-center items-center flex">
            X[Twitter]
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Telegram
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Discord
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Gitbook
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Blog
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Tokenomics
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-black text-gray gap-4">
        <p>© 2025 FAIR All rights reserved. Matrix Uno Ltd.</p>
        <div className="flex w-full md:w-0 md:flex-grow md:max-w-[400px] justify-between gap-4">
          <Link href="/" className="justify-center items-center flex">
            Terms of Service
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Privacy Policy
          </Link>
          <Link href="/" className="justify-center items-center flex">
            Cookies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
