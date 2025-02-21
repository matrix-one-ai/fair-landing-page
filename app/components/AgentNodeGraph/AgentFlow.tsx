import React, { useEffect, useRef } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useReactFlow,
} from "@xyflow/react";
import AgentCEONode from "./AgentCEONode";
import AgentNode from "./AgentNode";

import "@xyflow/react/dist/style.css";
import { AGENTS } from "@/app/constants";

const nodeTypes = {
  agentCEONode: AgentCEONode,
  agentNode: AgentNode,
};

const CustomNodeFlow = () => {
  const { setCenter } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current === null) return;

    setCenter(
      ((AGENTS.length - 1) * 300) / 2 + 120,
      ref.current.offsetHeight / 2,
      { zoom: 1 },
    );

    setNodes([
      {
        id: "agent-1",
        type: "agentCEONode",
        data: { avatar: "/images/agent_avatar_10.png" },
        position: { x: ((AGENTS.length - 1) * 300) / 2 + 32, y: 50 },
        sourcePosition: "right",
      },
      ...AGENTS.map((agent, index) => ({
        id: `agent-${index + 2}`,
        type: "agentNode",
        data: agent,
        position: { x: 300 * index, y: 300 },
      })),
    ] as never[]);

    setEdges(
      AGENTS.map((_, index) => ({
        id: `e1-${index + 2}`,
        source: "agent-1",
        target: `agent-${index + 2}`,
        animated: true,
      })) as never[],
    );
  }, [setCenter, setEdges, setNodes]);

  return (
    <ReactFlow
      ref={ref}
      className="border border-orange_brand border-dashed rounded-lg"
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
    >
      <MiniMap />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
