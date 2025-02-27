import React, { useCallback, useEffect, useRef } from "react";
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

  // Handle window resize
  const onResize = useCallback(() => {
    if (ref.current === null) return;

    setCenter(
      ((AGENTS.length - 1) * 300) / 2 + 120,
      ref.current.offsetHeight / 2 - (window.innerWidth > 768 ? 120 : 0),
      { zoom: 1 },
    );
  }, [setCenter]);

  // Stop React flow's default wheel behavior
  const onWheel = useCallback((e: WheelEvent) => {
    e.stopImmediatePropagation();
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    window.addEventListener("resize", onResize);
    ref.current?.addEventListener("wheel", onWheel, {
      capture: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", onResize);
      ref.current?.removeEventListener("wheel", onWheel, { capture: true });
    };
  }, [onWheel, onResize]);

  useEffect(() => {
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

    // Run resize handler initially
    onResize();
  }, [onResize, setCenter, setEdges, setNodes]);

  return (
    <ReactFlow
      ref={ref}
      className="border border-orange_brand border-dashed rounded-[30px] shadow-card"
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
    >
      <MiniMap className="hidden md:block" />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      <Controls />
    </ReactFlow>
  );
};

export default CustomNodeFlow;
