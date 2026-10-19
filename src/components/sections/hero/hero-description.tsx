"use client";

import FadeUp from "@/components/animations/fade-up";

export default function HeroDescription() {
  return (
    <FadeUp delay={0.35}>
      <p className="max-w-xl text-lg leading-10 text-slate-400">
        AI/ML Engineer specializing in{" "}
        <span className="font-medium text-cyan-300">
          agentic AI
        </span>
        ,{" "}
        <span className="font-medium text-cyan-300">
          RAG
        </span>{" "}
        and production ML systems.
        Built agentic pipelines with multi-agent orchestration and{" "}
        <span className="font-medium text-cyan-300">
          GraphRAG
        </span>{" "}
        retrieval, fine-tuned LLMs with{" "}
        <span className="font-medium text-cyan-300">
          LoRA
        </span>
        , and deployed reliable systems on{" "}
        <span className="font-medium text-cyan-300">
          AWS
        </span>{" "}
        and{" "}
        <span className="font-medium text-cyan-300">
          GCP
        </span>
        .
        Seeking an AI/ML Engineer role to build AI at scale.
      </p>
    </FadeUp>
  );
}