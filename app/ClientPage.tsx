"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { ReactFlowProvider } from "@xyflow/react";
import Slider from "react-slick";
import Header from "./components/Header";
import AgentFlow from "./components/AgentNodeGraph/AgentFlow";
import {
  AGENT_ACTIONS,
  AGENTS,
  BRANDS,
  FAQs,
  WORKS_WITH_BRANDS,
} from "./constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Card from "./components/Card/Card";

const ClientPage = () => {
  // Per slide implementation, need to decide its initial slides count
  const slidesToShow = useMemo(() => {
    if (window.innerWidth < 480) {
      return [2, 3, 1, 2];
    } else if (window.innerWidth < 640) {
      return [3, 4, 1, 2];
    } else if (window.innerWidth < 768) {
      return [4, 5, 2, 2];
    } else if (window.innerWidth < 1024) {
      return [2, 6, 3, 3];
    } else if (window.innerWidth < 1280) {
      return [3, 7, 3, 3];
    } else if (window.innerWidth < 1600) {
      return [4, 8, 4, 4];
    } else {
      return [5, 9, 4, 4];
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
            <button className="bg-black rounded-[10px] drop-shadow-button text-white font-bold px-6 py-4 w-40 hover:bg-orange_brand hover:text-black">
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
              slidesToShow={slidesToShow[0]}
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
          <Slider
            className="after:absolute after:inset-0 after:bg-gradient-to-r after:from-gray after:via-transparent after:to-gray"
            responsive={[
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 5,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 6,
                },
              },
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 7,
                },
              },
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 8,
                },
              },
              {
                breakpoint: 1920,
                settings: {
                  slidesToShow: 9,
                },
              },
            ]}
            initialSlide={0}
            slidesToShow={slidesToShow[1]}
            arrows={false}
            speed={3000}
            autoplaySpeed={0}
            cssEase="linear"
            autoplay
          >
            {[...BRANDS, ...BRANDS].map((brand, index) => {
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={brand}
                  key={`backed-by-brand-carousel-item-${index}`}
                  className="h-5 object-contain"
                  alt=""
                />
              );
            })}
          </Slider>
        </div>
        <div className="mt-6 w-full h-[70vh] px-7">
          <ReactFlowProvider>
            <AgentFlow />
          </ReactFlowProvider>
        </div>
        <div className="mt-6 flex flex-col gap-2 px-7">
          <Slider
            className="after:absolute after:inset-0 after:bg-gradient-to-r after:from-gray after:via-transparent after:to-gray"
            responsive={[
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
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
                  slidesToShow: 4,
                },
              },
            ]}
            initialSlide={0}
            slidesToShow={slidesToShow[2]}
            arrows={false}
            speed={5000}
            autoplaySpeed={0}
            cssEase="linear"
            autoplay
          >
            {AGENT_ACTIONS.map((action, index) => {
              return (
                <p
                  key={`agent-action-carousel-item-${index}`}
                  className="font-bold text-3xl md:text-4xl whitespace-nowrap text-center"
                >
                  {action}
                </p>
              );
            })}
          </Slider>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 px-7 lg:grid-cols-2">
          <div className="grid grid-flow-row grid-rows-9 gap-2">
            <div className="row-span-5 bg-mint_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase">
                ADD AI AGENTS FROM OTHER FRAMEWORKS TO YOUR TEAM
              </p>
              <p className="mb-10 uppercase">
                WE CAN INTEGRATE OTHER AI FRAMEWORKS OR EXISTNG AI AGENTS INTO
                YOUR TEAM. INCLUDING ELIZAOS, VIRTUALS, PIPPIN, ARC, TOPHAT AND
                MORE.
              </p>
              <div className="flex justify-between">
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
                    className="w-14 h-14"
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
            <Image
              src="/images/live_chat_placeholder.png"
              width={600}
              height={600}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
        </div>
        <div className="mt-6 px-7">
          <div className="rounded-3xl border border-black flex p-6 lg:p-10 justify-between items-center bg-orange_brand lg:flex-row flex-col gap-4">
            <p className="font-bold text-4xl uppercase text-mint_brand">
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
                  className="w-14 h-14"
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-2 px-7 lg:grid-cols-3">
          <div className="grid grid-flow-row grid-rows-15 gap-2">
            <div className="row-span-8 bg-mint_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase">
                Serverless Enterprise Agents As A Service
              </p>
              <p className="mb-10 uppercase">
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
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 py-4 hover:bg-black hover:text-white">
                BOOK A CALL
              </button>
            </div>
          </div>
          <div className="grid grid-flow-row grid-rows-9 gap-2">
            <div className="row-span-4 bg-gradient-to-b from-transparent to-black/20 flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-orange_brand">
                Private and Secure Data
              </p>
              <p className="mb-10 uppercase">
                All your AI Agent team data is secured using Nillion.
              </p>
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
            <div className="row-span-5 bg-orange_brand flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-mint_brand">
                Launch and distribute tokens
              </p>
              <p className="mb-10 uppercase">
                Our AI Agent automatically distributes tokens using TEE. Tokens
                are sent to your community as decided by your AI Agent team.
              </p>
              <p className="font-bold text-black">Powered by</p>
              <div className="flex gap-2">
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
          <div className="grid grid-flow-row grid-rows-9 gap-2">
            <div className="row-span-5 bg-black flex flex-col p-6 lg:p-10 rounded-3xl border border-black">
              <p className="mb-3 font-bold text-4xl uppercase text-mint_brand">
                Fully Managed Solana Token
              </p>
              <p className="mb-10 uppercase text-gray">
                Your team can airdrop, transfer and trade tokens. Launch
                liquidity pools and execute blinks.
              </p>
              <p className="font-bold text-orange_brand">Powered by</p>
              <div className="flex gap-2">
                {["/images/image_16.png", "/images/image_17.png"].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    width={128}
                    height={128}
                    className="h-6"
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="row-span-4 bg-mint_brand rounded-3xl border border-black flex flex-col p-6 lg:p-10">
              <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                We have API&apos;s covered
              </p>
              <p className="mb-10 text-black uppercase">
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
            <button className="bg-black rounded-[10px] drop-shadow-button text-white font-bold px-6 py-4 w-40 hover:bg-orange_brand hover:text-black">
              GET ACCESS
            </button>
          </div>
        </div>
        <div className="mt-6 px-7">
          <p className="font-bold text-center text-5xl uppercase m-14">
            WORKS WITH
          </p>
          <Slider
            className="after:absolute after:inset-0 after:bg-gradient-to-r after:from-gray after:via-transparent after:to-gray"
            responsive={[
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
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
                  slidesToShow: 4,
                },
              },
            ]}
            initialSlide={0}
            slidesToShow={slidesToShow[3]}
            arrows={false}
            speed={3000}
            autoplaySpeed={0}
            cssEase="linear"
            autoplay
          >
            {[...WORKS_WITH_BRANDS, ...WORKS_WITH_BRANDS].map(
              (brand, index) => {
                return (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={brand}
                    key={`works-with-brand-carousel-item-${index}`}
                    className="h-12 object-contain"
                    alt=""
                  />
                );
              },
            )}
          </Slider>
        </div>
        <div className="mt-6 px-7">
          <p className="font-bold text-center text-4xl uppercase m-14">FAQs</p>
          <div className="w-full flex flex-col gap-6">
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
