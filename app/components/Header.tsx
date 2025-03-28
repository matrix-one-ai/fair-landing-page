import Link from "next/link";
import React from "react";
import XIcon from "./Icons/XIcon";
import DiscordIcon from "./Icons/DiscordIcon";
import GithubIcon from "./Icons/GithubIcon";
import BookIcon from "./Icons/BookIcon";
import UnknownIcon from "./Icons/UnknownIcon";

const Header = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-gray_secondary">
      <div className="w-full max-w-[1400px] h-[100px] flex justify-between items-center px-7">
        <Link
          href="/"
          className="border-dashed border-orange_brand border-2 rounded-md text-orange_brand font-extrabold text-2xl px-5 pt-3 pb-1.5"
        >
          <span className="mr-[2em]">F</span>
          <span className="mr-[2em]">A</span>
          <span className="mr-[2em]">I</span>
          <span>R</span>
        </Link>
        <div className="hidden md:flex justify-center items-center gap-6">
          <Link
            href="https://twitter.com/matrixoneai"
            className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
            target="_blank"
          >
            <XIcon />
          </Link>
          <Link
            href="https://discord.gg/matrixone"
            className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
            target="_blank"
          >
            <DiscordIcon />
          </Link>
          <Link
            href="https://docs.matrix.one/"
            className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
            target="_blank"
          >
            <BookIcon />
          </Link>
          <Link
            href="https://github.com/matrix-one-ai"
            className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://matrixoneai.medium.com/"
            className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
            target="_blank"
          >
            <UnknownIcon />
          </Link>
          <Link
            href="/get-access"
            className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-black hover:text-white"
          >
            GET ACCESS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
