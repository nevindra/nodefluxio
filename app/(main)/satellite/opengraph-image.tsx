import { generateOGImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Vision AI for Space-Edge Satellite | Nodeflux";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return generateOGImage({
    title: "Vision AI for Space-Edge Satellite",
    description:
      "On-orbit inference for sovereign maritime, border, disaster, and environmental intelligence.",
    badge: "Product",
  });
}
