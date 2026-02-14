import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt =
  "Nodeflux - AI-Powered Video Surveillance & Intelligent Agents";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "AI-Powered Video Surveillance & Intelligent Agents",
    description:
      "Indonesia's leading AI company building Video Surveillance Intelligence and LLM-powered AI Agents for enterprise solutions.",
  });
}
