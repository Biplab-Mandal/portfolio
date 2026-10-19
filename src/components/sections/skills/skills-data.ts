import { SkillCategory } from "./types";

import {
  BrainCircuit,
  Bot,
  Network,
  ScanEye,
  Cpu,
  Cloud,
  BarChart3,
} from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    title: "LLM Training & Inference",
    description:
      "Fine-tuning, optimization and deployment of production-ready LLMs.",
    icon: BrainCircuit,
    color: "cyan",
    badge: "Production Ready",
    skills: [
      "Full Fine-tuning",
      "PEFT",
      "LoRA",
      "QLoRA",
      "Instruction Tuning",
      "RLHF",
      "DPO",
      "Mixed Precision",
      "Gradient Checkpointing",
      "vLLM",
      "GPTQ",
      "AWQ",
      "HuggingFace",
      "Unsloth",
    ],
  },

  {
    title: "Agentic & RAG Systems",
    description:
      "Building intelligent multi-agent systems with RAG and orchestration.",
    icon: Bot,
    color: "violet",
    badge: "Production Projects",
    skills: [
      "LangChain",
      "LangGraph",
      "Tool Calling",
      "CrewAI",
      "AutoGen",
      "MCP",
      "Google ADK",
      "Multi-Agent",
      "Prompt Engineering",
      "Multimodal RAG",
    ],
  },

  {
    title: "Knowledge Graphs & Vector Search",
    description:
      "Graph databases, semantic retrieval and vector search pipelines.",
    icon: Network,
    color: "blue",
    badge: "Graph AI",
    skills: [
      "Neo4j",
      "Qdrant",
      "Pinecone",
      "FAISS",
      "ChromaDB",
      "LanceDB",
      "Knowledge Graphs",
      "Semantic Search",
    ],
  },

  {
    title: "Computer Vision & NLP",
    description:
      "Deep learning models for vision, language and multimodal AI.",
    icon: ScanEye,
    color: "amber",
    badge: "Deep Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "YOLO",
      "SpaCy",
      "NLTK",
      "NER",
      "ASR",
      "Transformers",
    ],
  },

  {
    title: "MLOps & Infrastructure",
    description:
      "Scalable ML deployment, automation and production infrastructure.",
    icon: Cpu,
    color: "green",
    badge: "Deployment",
    skills: [
      "Docker",
      "Kubernetes",
      "MLflow",
      "Weights & Biases",
      "Apache Spark",
      "Airflow",
      "Terraform",
      "Databricks",
      "ETL Pipelines",
      "Git",
      "CI/CD",
    ],
  },

  {
    title: "Cloud & Databases",
    description:
      "Cloud-native AI deployment and modern database technologies.",
    icon: Cloud,
    color: "sky",
    badge: "Cloud Native",
    skills: [
      "AWS",
      "Bedrock",
      "Lambda",
      "EC2",
      "S3",
      "SageMaker",
      "GCP",
      "Vertex AI",
      "Azure ML",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "SQL",
      "Bash",
    ],
  },

  {
    title: "Evaluation & Reliability",
    description:
      "Evaluation frameworks, monitoring and reliable AI system design.",
    icon: BarChart3,
    color: "rose",
    badge: "Responsible AI",
    skills: [
      "LLM-as-a-Judge",
      "Human Evaluation",
      "Hallucination Detection",
      "A/B Testing",
      "Latency Optimization",
      "Cost Optimization",
      "Fault Tolerance",
    ],
  },
];