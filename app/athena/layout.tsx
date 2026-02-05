import { generateMetadata } from "@/app/config/sharedMetadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Athena - Enterprise LLM Agent with RAG & Knowledge Graph | Nodeflux",
  "Athena is an enterprise LLM Agent platform that turns your company documents into a smart assistant. Powered by RAG, Agentic Workflows, and Knowledge Graphs for accurate, grounded answers from your business data.",
  [
    "Athena",
    "LLM Agent",
    "Enterprise AI Assistant",
    "RAG Platform",
    "Retrieval Augmented Generation",
    "Knowledge Graph AI",
    "Agentic Workflow",
    "AI Chatbot Builder",
    "Document Q&A",
    "Enterprise Knowledge Base",
    "AI Document Search",
    "Business Intelligence AI",
    "Custom AI Assistant",
    "Vector Search",
    "Generative AI Platform",
    "Indonesian LLM",
    "Enterprise RAG",
    "AI Report Generation",
    "Nodeflux Athena",
  ],
);

export default function AthenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
