import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nodeflux Studio",
  robots: "noindex, nofollow",
};

export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
