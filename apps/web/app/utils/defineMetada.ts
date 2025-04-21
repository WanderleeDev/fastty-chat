import type { Metadata } from "next";
import thumbnail from "@/public/thumbnail-page.webp";

type DefineMetadataProps = {
  titlePage: string;
  descriptionPage: string;
  index: boolean;
  follow: boolean;
  image: string;
};

export function defineMetadata({
  titlePage,
  descriptionPage,
  image = thumbnail.src,
  index = true,
  follow = true,
}: Partial<DefineMetadataProps>): Metadata {
  const description =
    descriptionPage ??
    "FastyChat: The fastest and easiest way to connect, chat, and share. A modern messaging experience designed to keep you in touch.";
  const title = `FasttyChat${titlePage ? ` | ${titlePage}` : ""}`;

  return {
    title,
    description,
    robots: { index, follow },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en",
      siteName: "FasttyChat",
      url: "https://www.fastty.com",
      images: [image],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      site: "@Fastty",
      images: [image],
    },
  };
}
