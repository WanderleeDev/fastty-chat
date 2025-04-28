import type { Metadata } from "next";

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
  image = "https://www.dropbox.com/scl/fi/sifttoyagx12crbzd1hm5/thumbnail-page.webp?rlkey=16pzuniyhh384hhxce7sqkewd&st=xx4nhwsh&raw=1",
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
    metadataBase: new URL("https://fastty-chat.vercel.app"),
    alternates: {
      canonical: "/",
    },
    robots: { index, follow },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en",
      siteName: "FasttyChat",
      url: "https://fastty-chat.vercel.app/",
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
