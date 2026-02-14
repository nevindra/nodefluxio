import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Contact Nodeflux - Get in Touch";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Get in Touch",
    description:
      "Discuss how our AI-powered solutions can optimize your organizational efficiency, safety, and operational clarity.",
    badge: "Contact",
  });
}
