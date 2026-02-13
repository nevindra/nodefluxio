import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Nodeflux Blog - AI & Video Surveillance Insights";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Blog — AI & Video Surveillance Insights",
    description:
      "Latest articles on AI video analytics, smart city technology, and enterprise AI solutions.",
    badge: "Blog",
  });
}
