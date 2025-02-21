import Link from "next/link";
import React from "react";
import XIcon from "./Icons/XIcon";
import DiscordIcon from "./Icons/DiscordIcon";
import GithubIcon from "./Icons/GithubIcon";
import BookIcon from "./Icons/BookIcon";
import UnknownIcon from "./Icons/UnknownIcon";

const Header = () => {
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-7 sticky top-0 z-50 bg-gray">
      <Link
        href="/"
        className="border-dashed border-orange_brand border-2 rounded-md text-orange_brand font-extrabold text-2xl px-1.5 pt-3 pb-1.5"
      >
        <span className="mr-[2em]">F</span>
        <span className="mr-[2em]">A</span>
        <span className="mr-[2em]">I</span>
        <span>R</span>
      </Link>
      <div className="hidden md:flex justify-center items-center gap-6">
        <Link
          href="/"
          className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
        >
          <XIcon />
        </Link>
        <Link
          href="/"
          className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
        >
          <DiscordIcon />
        </Link>
        <Link
          href="/"
          className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
        >
          <BookIcon />
        </Link>
        <Link
          href="/"
          className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
        >
          <GithubIcon />
        </Link>
        <Link
          href="/"
          className="bg-black w-7 h-7 justify-center items-center rounded-md flex"
        >
          <UnknownIcon />
        </Link>
        <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 py-4 hover:bg-black hover:text-white">
          GET ACCESS
        </button>
      </div>
    </div>
  );
};

export default Header;
