import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import React from "react";

interface IAgentCEONode {
  data: {
    avatar: string;
  };
  isConnectable: boolean;
}

const AgentCEONode: React.FC<IAgentCEONode> = ({
  data: { avatar },
  isConnectable,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-44 gap-1 p-6 shadow-card">
        <Image
          src={avatar}
          width={300}
          height={300}
          className="w-16 h-16 border border-black rounded"
          alt=""
        />
        <div className="flex flex-col gap-2 p-2">
          <p className="font-semibold text-orange_brand text-base leading-3">
            YOU
          </p>
          <p className="text-xs leading-3">AI Agent CEO</p>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </>
  );
};

export default AgentCEONode;
