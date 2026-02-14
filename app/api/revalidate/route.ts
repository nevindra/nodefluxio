import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  slug?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    revalidatePath("/blog");

    if (body?.slug) {
      revalidatePath(`/blog/${body.slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      slug: body?.slug || null,
    });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
