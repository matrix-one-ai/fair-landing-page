import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";
import Dropdown from "@/app/components/Dropdown";
import { EAutonomyType, EDataSources, ETools } from "@/app/types";
import { DATA_SOURCE_ICONS, TOOL_ICONS } from "@/app/constants";

interface IAgentNode {
  data: {
    name: string;
    avatar: string;
    role: string;
    description: string;
    tools: ETools[];
    dataSources: EDataSources[];
    autonomyType: EAutonomyType;
  };
  isConnectable: boolean;
}

const AgentNode: React.FC<IAgentNode> = ({
  data: { name, avatar, role, description, tools, dataSources, autonomyType },
  isConnectable,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-60 gap-3 p-6 text-black font-bold text-xs text-left shadow-card">
        <div className="flex w-full gap-2">
          <Image
            src={avatar}
            width={300}
            height={300}
            className="w-16 h-16 border border-black rounded"
            alt=""
          />
          <div className="flex flex-col gap-2 w-0 flex-grow">
            <p className="text-orange_brand text-base leading-4">{role}</p>
            <p>{name}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Description</p>
          <p className="font-normal text-xxs h-14 overflow-hidden">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p>Framework</p>
          <Dropdown
            options={[
              "FAIR",
              "ElizaOS",
              "Griffain",
              "Dolion",
              "Pippin",
              "ZerePy",
              "Virtuals",
              "CreatorBid",
            ]}
            value="FAIR"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p>LLM</p>
          <Dropdown
            options={[
              "ChatGpt 4",
              "ChatGpt o3 - Mini",
              "Google Gemini",
              "Grok",
            ]}
            value="ChatGpt 4"
          />
        </div>
        <div className="flex flex-col gap-1 w-full bg-gray p-1">
          <div className="flex gap-1">
            <p>
              Tools <span className="text-orange_brand">({tools.length})</span>
            </p>
          </div>
          <div className="flex gap-1">
            {tools.map((tool, index) => (
              <Image
                key={`agent-tool-${index}`}
                src={TOOL_ICONS[tool]}
                width={64}
                height={64}
                style={{ width: "15px", height: "15px" }}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full bg-gray p-1">
          <div className="flex gap-1">
            <p>
              Data Sources{" "}
              <span className="text-orange_brand">({dataSources.length})</span>
            </p>
          </div>
          <div className="flex gap-1">
            {dataSources.map((dataSource, index) => (
              <Image
                key={`agent-dataSource-${index}`}
                src={DATA_SOURCE_ICONS[dataSource]}
                width={64}
                height={64}
                style={{ width: "15px", height: "15px" }}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p>Autonomy</p>
          <Dropdown
            options={Object.values(EAutonomyType)}
            value={autonomyType}
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default AgentNode;
