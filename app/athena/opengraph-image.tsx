import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Athena - LLM Agent with RAG & Knowledge Graph | Nodeflux";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Athena — LLM Agent with RAG & Knowledge Graph",
    description:
      "Turn company documents into a smart assistant. Powered by RAG, Agentic Workflows, and Knowledge Graphs.",
    badge: "Product",
  });
}
