import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Athena | Nodeflux AI Business Assistant",
  description: "Athena is an intelligent generative AI assistant that understands your business data through RAG, Agentic workflows, and a comprehensive Knowledge Base.",
};

export default function AthenaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
