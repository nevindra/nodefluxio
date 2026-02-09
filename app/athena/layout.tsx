import { generateMetadata } from "@/app/config/sharedMetadata";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  "Athena - LLM Agent with RAG & Knowledge Graph | Nodeflux",
  "Enterprise LLM Agent platform turning company documents into a smart assistant. Powered by RAG, Agentic Workflows, and Knowledge Graphs.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: "Athena",
              description:
                "Enterprise LLM Agent platform that turns company documents into a smart assistant, powered by RAG, Agentic Workflows, and Knowledge Graphs for accurate, grounded answers from business data.",
              url: "/athena",
              image: "/landing-page/visionaire-core.webp",
              category: "BusinessApplication",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Athena", url: "/athena" },
            ]),
          ),
        }}
      />
      {children}
    </>
  );
}
