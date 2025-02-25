"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ReactFlowProvider } from "@xyflow/react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import Header from "./components/Header";
import AgentFlow from "./components/AgentNodeGraph/AgentFlow";
import Footer from "./components/Footer";
import Card from "./components/Card/Card";
import {
  AGENT_ACTIONS,
  AGENTS,
  BRANDS,
  FAQs,
  WORKS_WITH_BRANDS,
} from "./constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AgentSession from "./components/AgentSession";

const ClientPage = () => {
  // Decide how many avatars to show initially
  const avatarSlidesToShow = useMemo(() => {
    if (window.innerWidth < 480) {
      return 2;
    } else if (window.innerWidth < 640) {
      return 3;
    } else if (window.innerWidth < 768) {
      return 4;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else if (window.innerWidth < 1280) {
      return 3;
    } else if (window.innerWidth < 1600) {
      return 4;
    } else {
      return 5;
    }
  }, []);

  return (
    <div className="flex w-full flex-col text-black items-center">
      <Header />
      <div className="flex flex-col max-w-[1920px] w-full mb-20">
        <div className="flex flex-col px-7 justify-between mt-16 md:flex-row gap-10">
          <div className="flex flex-col gap-6 items-center md:items-end flex-1">
            <span className="text-center md:text-right font-bold text-5xl">
              Deploy, Launch, & Automate Any Crypto Project
            </span>
            <span className="text-center md:text-right">
              Cut costs, streamline operations, and scale your crypto project
              effortlessly
            </span>
            <button className="bg-black rounded-[10px] drop-shadow-button text-white font-bold px-6 pb-4 pt-5 w-40 hover:bg-orange_brand hover:text-black">
              GET ACCESS
            </button>
          </div>
          <div className="w-full h-[250px] md:w-0 md:h-auto md:flex-1">
            <Slider
              className="cursor-pointer"
              responsive={[
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 1920,
                  settings: {
                    slidesToShow: 5,
                  },
                },
              ]}
              initialSlide={0}
              slidesToShow={avatarSlidesToShow}
              arrows={false}
              speed={2000}
              autoplaySpeed={2000}
              focusOnSelect
              swipeToSlide
              autoplay
              pauseOnHover
            >
              {AGENTS.map(({ avatar, role }, index) => {
                return (
                  <div
                    key={`agent-avatar-carousel-item-${index}`}
                    className="!flex flex-col font-bold px-2 h-full gap-2 group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={avatar}
                      className="w-full h-0 flex-grow object-cover border border-black rounded-full group-hover:border-mint_brand group-hover:drop-shadow-sm"
                      alt=""
                    />
                    <p className="text-center truncate group-hover:text-orange_brand uppercase">
                      {role}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 px-7">
          <p className="font-bold text-center">Backed By</p>
          <Marquee gradientColor="#D9D9D9" gradient autoFill>
            {BRANDS.map((brand, index) => {
              return (
                <Image
                  src={brand}
                  key={`backed-by-brand-carousel-item-${index}`}
                  className="w-auto h-10 object-contain mx-8 md:mx-12 lg:mx-16"
                  width={128}
                  height={128}
                  alt=""
                />
              );
            })}
          </Marquee>
        </div>
        <div className="mt-6 w-full h-[840px] px-7">
          <ReactFlowProvider>
            <AgentFlow />
          </ReactFlowProvider>
        </div>
        <div className="mt-6 flex flex-col gap-2 px-7">
          <Marquee gradientColor="#D9D9D9" gradient autoFill>
            {AGENT_ACTIONS.map((action, index) => {
              return (
                <p
                  key={`agent-action-carousel-item-${index}`}
                  className="font-bold text-3xl md:text-4xl whitespace-nowrap text-center mx-8 md:mx-12 lg:mx-16"
                >
                  {action}
                </p>
              );
            })}
          </Marquee>
        </div>
        <div className="mt-6 flex flex-col gap-2 px-7 lg:grid lg:grid-cols-2">
          <div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-9 gap-2">
            <div className="row-span-5 bg-mint_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase">
                ADD AI AGENTS FROM OTHER FRAMEWORKS TO YOUR TEAM
              </p>
              <p className="mb-10 uppercase">
                WE CAN INTEGRATE OTHER AI FRAMEWORKS OR EXISTNG AI AGENTS INTO
                YOUR TEAM. INCLUDING ELIZAOS, VIRTUALS, PIPPIN, ARC, TOPHAT AND
                MORE.
              </p>
              <div className="flex justify-between gap-2 w-full max-w-[200px]">
                {[
                  "/images/image_01.png",
                  "/images/image_02.png",
                  "/images/image_03.png",
                  "/images/image_04.png",
                  "/images/image_05.png",
                  // "/images/image_06.png",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    width={128}
                    height={128}
                    className="w-10 h-10 md:w-14 md:h-14"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="row-span-4 bg-black rounded-3xl border border-black flex flex-col p-6 lg:p-10">
              <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                Human-in-the-loop or swarm of agents
              </p>
              <p className=" text-gray uppercase">
                Our tooling allows you to be the Human-in-the-Loop with your
                team or you can fully automate and enable your team to act as a
                Swarm of AI Agents.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-black flex flex-col p-6 lg:p-10 bg-gradient-to-b from-transparent to-black/20">
            <p className="mb-3 font-bold text-4xl uppercase">
              LIVE STREAM CHAT WITH YOUR TEAM
            </p>
            <AgentSession />
          </div>
        </div>
        <div className="mt-2 lg:mt-6 px-7">
          <div className="rounded-3xl border border-black flex p-6 lg:p-10 justify-between items-center bg-orange_brand lg:flex-row flex-col gap-4">
            <p className="font-bold text-4xl uppercase text-mint_brand pt-2">
              Available LLMs
            </p>
            <div className="flex justify-between w-full lg:w-0 lg:flex-grow lg:max-w-[500px]">
              {[
                "/images/image_07.png",
                "/images/image_08.png",
                "/images/image_09.png",
                "/images/image_10.png",
                "/images/image_11.png",
              ].map((src) => (
                <Image
                  key={src}
                  src={src}
                  width={128}
                  height={128}
                  className="w-10 h-10 md:w-14 md:h-14"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2 lg:mt-6 flex flex-col lg:grid gap-2 px-7 lg:grid-cols-3">
          <div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-15 gap-2">
            <div className="row-span-8 bg-mint_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase">
                Serverless Enterprise Agents As A Service
              </p>
              <p className="mb-3 uppercase">
                Cloud Hosted 24/7 on Azure. We are supported by Microsoft for
                Startups Program.
              </p>
              <p className="font-bold text-orange_brand">Powered by</p>
              <div className="flex gap-2">
                {["/images/image_12.png", "/images/image_13.png"].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    width={32}
                    height={32}
                    className="h-8 object-contain"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="row-span-7 bg-black rounded-3xl border border-black flex flex-col p-6 lg:p-10">
              <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                Your own human rep
              </p>
              <p className="mb-8 text-gray uppercase">
                We work with you one-on-one to create, deploy and automate your
                team. A human rep you can schedule a call with anytime.
              </p>
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-black hover:text-white">
                BOOK A CALL
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-9 gap-2">
            <div className="row-span-4 bg-gradient-to-b from-transparent to-black/20 flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-orange_brand">
                Private and Secure Data
              </p>
              <div className="lg:h-0 lg:flex-grow lg:flex lg:justify-between lg:flex-col">
                <p className="mb-3 uppercase">
                  All your AI Agent team data is secured using Nillion.
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-orange_brand">Powered by</p>
                  <div className="flex gap-2">
                    {["/images/image_14.png"].map((src) => (
                      <Image
                        key={src}
                        src={src}
                        width={96}
                        height={96}
                        className="h-8 object-contain"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-5 bg-orange_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-mint_brand">
                Launch and distribute tokens
              </p>
              <div className="lg:h-0 lg:flex-grow lg:flex lg:justify-between lg:flex-col">
                <p className="mb-3 uppercase">
                  Our AI Agent automatically distributes tokens using TEE.
                  Tokens are sent to your community as decided by your AI Agent
                  team.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-black">Powered by</p>
                  <div className="flex gap-1">
                    {["/images/image_15.png"].map((src) => (
                      <Image
                        key={src}
                        src={src}
                        width={32}
                        height={32}
                        className="h-8 object-contain"
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-rows-9 gap-2">
            <div className="row-span-5 bg-black flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-mint_brand">
                Fully Managed Solana Token
              </p>
              <div className="lg:h-0 lg:flex-grow lg:flex lg:justify-between lg:flex-col">
                <p className="mb-3 uppercase text-gray">
                  Your team can airdrop, transfer and trade tokens. Launch
                  liquidity pools and execute blinks.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-orange_brand">Powered by</p>
                  <div className="flex gap-2">
                    {["/images/image_16.png", "/images/image_17.png"].map(
                      (src) => (
                        <Image
                          key={src}
                          src={src}
                          width={128}
                          height={128}
                          className="h-6"
                          alt=""
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-4 bg-mint_brand rounded-3xl border border-black flex flex-col p-6 lg:p-10">
              <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                We have API&apos;s covered
              </p>
              <div className="lg:h-0 lg:flex-grow lg:flex lg:justify-between lg:flex-col">
                <p className="mb-3 text-black uppercase">
                  FULL Access to Crypto API&apos;s including CoinGecko,
                  CoinMarketCap, Helius, Solscan and X PRO.
                </p>
                <div className="flex gap-2">
                  {[
                    "/images/image_18.png",
                    "/images/image_19.png",
                    "/images/image_20.png",
                    "/images/image_21.png",
                    "/images/image_22.png",
                  ].map((src) => (
                    <Image
                      key={src}
                      src={src}
                      width={128}
                      height={128}
                      className="w-6 h-6"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 px-7">
          <p className="font-bold text-center text-5xl uppercase m-14">
            PRICING
          </p>
          <div className="rounded-3xl border border-black flex p-6 lg:p-10 justify-between items-center bg-gradient-to-b from-transparent to-black/20 shadow-lg lg:flex-row flex-col gap-4">
            <div className="flex flex-col gap-2 lg:w-0 lg:flex-grow w-full">
              <p className="font-bold text-4xl uppercase text-orange_brand">
                PAY MONTHLY
              </p>
              <p className="uppercase">
                A set monthly fee based on usage. This only starts once your
                team is DEPLOYED. We even buy a % of your token. IF YOU LAUNCH
                ONE.
              </p>
            </div>
            <button className="bg-black rounded-[10px] drop-shadow-button text-white font-bold px-6 pb-4 pt-5 w-40 hover:bg-orange_brand hover:text-black">
              GET ACCESS
            </button>
          </div>
        </div>
        <div className="mt-6 px-7">
          <p className="font-bold text-center text-5xl uppercase m-14">
            WORKS WITH
          </p>
          <Marquee gradientColor="#D9D9D9" gradient autoFill>
            {WORKS_WITH_BRANDS.map((brand, index) => {
              return (
                <Image
                  src={brand}
                  key={`works-with-brand-carousel-item-${index}`}
                  className="w-auto h-10 object-contain mx-8 md:mx-12 lg:mx-16"
                  width={128}
                  height={128}
                  alt=""
                />
              );
            })}
          </Marquee>
        </div>
        <div className="mt-6 px-7 flex flex-col items-center">
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
      </div>
      <Footer />
    </div>
  );
};

export default ClientPage;
