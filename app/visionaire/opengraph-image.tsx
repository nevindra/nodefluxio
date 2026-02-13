import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Visionaire - AI Video Analytics Platform | Nodeflux";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Visionaire — AI Video Analytics Platform",
    description:
      "Face Recognition, License Plate Recognition, People Analytics, and Vehicle Detection for security and smart cities.",
    badge: "Product",
  });
}
