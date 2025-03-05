import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full pt-20 bg-gray_secondary">
      <div className="w-full max-w-[1400px]">
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-4 p-4 text-gray_secondary_text">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="border-dashed border-gray_secondary_text border-2 rounded-md font-extrabold text-2xl px-5 pt-3 pb-1.5 w-fit">
              <span className="mr-[2em]">F</span>
              <span className="mr-[2em]">A</span>
              <span className="mr-[2em]">I</span>
              <span>R</span>
            </div>
            <p className="mt-4">Framework for (Human) and AI Runtime</p>
            <p className="mt-2">FAIR, 2025.</p>
          </div>
          <div className="flex w-full md:w-0 md:flex-grow md:max-w-[500px] justify-between gap-4 flex-wrap">
            <Link
              href="https://twitter.com/matrixoneai"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              X[Twitter]
            </Link>
            <Link
              href="https://t.me/fairdottoken"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              Telegram
            </Link>
            <Link
              href="https://discord.gg/matrixone"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              Discord
            </Link>
            <Link
              href="https://docs.matrix.one"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              Gitbook
            </Link>
            <Link
              href="https://matrixoneai.medium.com/"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              Blog
            </Link>
            <Link
              href="https://dune.com/fairtoken/fairtoken"
              className="justify-center items-center flex hover:text-orange_brand"
              target="_blank"
            >
              Tokenomics
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full p-4 bg-black text-gray gap-4">
        <div className="flex flex-col w-full max-w-[1400px] md:flex-row justify-between items-center ">
          <p>© 2025 FAIR All rights reserved. Matrix Uno Ltd.</p>
          <div className="flex w-full md:w-0 md:flex-grow md:max-w-[400px] justify-between gap-4">
            <Link
              href="/"
              className="justify-center items-center flex hover:text-orange_brand"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="justify-center items-center flex hover:text-orange_brand"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
