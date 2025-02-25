import React from "react";
import Image from "next/image";
import SendIcon from "./Icons/SendIcon";
import MessageIcon from "./Icons/MessageIcon";
import { AGENT_SESSION_MOCK_DATA } from "@/app/constants";

const AgentSession = () => {
  return (
    <div className="flex flex-col w-full h-full px-6 py-3 bg-gray_roll_over_fields border border-mint_brand rounded-lg shadow-agent_session drop-shadow-agent_session">
      <p className="text-orange_brand font-bold mb-6 flex gap-2 items-center">
        <MessageIcon />
        Agent Session
      </p>
      <div className="flex flex-col gap-3 overflow-scroll h-96 lg:h-0 lg:flex-grow mb-3">
        {AGENT_SESSION_MOCK_DATA.map(({ avatar, role, text }, index) => (
          <div
            key={`avatar-chat-session-${index}`}
            className="flex flex-row items-start gap-1 bg-gray p-2 rounded"
          >
            <Image
              src={avatar}
              width={300}
              height={300}
              className="w-16 h-16 border border-black rounded"
              alt=""
            />
            <div className="flex flex-col gap-1 w-0 flex-grow text-black">
              <p className="font-bold">{role}</p>
              <p className="text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full">
        <input
          className="outline-none w-full rounded px-2 py-1 bg-gray border border-black"
          placeholder="Type your message here..."
        />
        <button className="absolute float-right top-1/2 right-2 transform -translate-y-1/2 text-sm text-black">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default AgentSession;
