"use client";

import FAQ from "@/app/components/FAQ";

export default function Page() {
  return (
    <div className="flex w-full flex-col text-black items-center">
      <div className="flex justify-center w-full bg-gradient-to-b from-gray_secondary to-gray">
        <div className="w-full max-w-[1400px] flex flex-col px-7 justify-between pt-16 pb-12 gap-16 lg:pt-32 lg:pb-24 lg:gap-32">
          <div className="flex flex-col gap-6 items-center flex-1">
            <span className="text-center font-bold text-5xl uppercase">
              Get Access to fair
            </span>
            <span className="text-center uppercase">
              Join us in automating any crypto project with a team of ai agents
            </span>
          </div>
          <div className="gap-4 flex flex-col lg:grid lg:grid-cols-3">
            <div className="bg-black rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
              <div className="">
                <p className="mb-3 font-bold text-4xl text-orange_brand uppercase">
                  CREATE A TEAM
                </p>
                <p className="mb-8 text-gray uppercase">
                  GET ACCESS TO OUR FRAMEWORK SO YOU CAN LAUNCH OR AUTOMATE ANY
                  CRYPTO PROJECT WITH A TEAM OF AI AGENTS. OUR TEAM WORKS WITH
                  YOU HANDS ON TO AUTOMATE YOUR CRYPTO PROJECT. APPLICANTS WITH
                  AN ACCESS CODE ARE PRIORITIZED.
                </p>
              </div>
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white">
                BOOK A CALL
              </button>
            </div>
            <div className="bg-transparent rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
              <div className="">
                <p className="mb-3 font-bold text-4xl text-black uppercase">
                  EARN $FAIR FOR SALES
                </p>
                <p className="mb-8 text-black uppercase">
                  YOU WILL RECEIVE 5 INVITE CODES ONLY TO GIVE USERS FIRST
                  ACCESS TO THE FAIR PLATFORM. RECEIVE A SALES COMMISSION VIA
                  THE $FAIR TOKEN UNLOCK.
                </p>
              </div>
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white">
                GET INVITE CODES
              </button>
            </div>
            <div className="bg-mint_brand rounded-3xl border border-black flex flex-col justify-between p-6 lg:p-10 shadow-card flex-1">
              <div className="">
                <p className="mb-3 font-bold text-4xl text-black uppercase">
                  EARN $FAIR FOR MARKETING
                </p>
                <p className="mb-8 text-black uppercase">
                  MENTION @fAIRDOTTOKEN ON X AND DRIVE MINDSHARE. OUR AI WILL
                  MEASURE YOUR POST AND YOU WILL RECEIVE $fAIR VIA THE TOKEN
                  UNLOCK. .
                </p>
              </div>
              <button className="bg-orange_brand rounded-[10px] drop-shadow-button text-black font-bold px-6 pb-4 pt-5 hover:bg-gray_secondary_text hover:text-white">
                VERIFY MY X
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 px-7 flex justify-center w-full bg-gradient-to-b from-gray to-gray_secondary">
        <FAQ />
      </div>
    </div>
  );
}
