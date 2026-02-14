import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Lenz - AI-Powered Video Management System | Nodeflux";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Lenz — AI-Powered Video Management System",
    description:
      "Unify 1000+ cameras in one dashboard. AI-powered analysis, real-time alerts, and low-latency streaming.",
    badge: "Product",
  });
}
