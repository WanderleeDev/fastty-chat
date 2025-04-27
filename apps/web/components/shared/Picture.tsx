"use client";

import { useState } from "react";
import { Box, Image, ImageProps } from "@chakra-ui/react";
import BoxGradient from "./BoxGradient";

interface PictureProps extends Omit<ImageProps, "src" | "alt"> {
  sources: Source[];
  alt: string;
  src: string;
}

interface Source {
  mediaWidth: number;
  srcSet: string;
}

export default function Picture({ sources, alt, src, ...props }: PictureProps) {
  const [error, setError] = useState(false);

  return (
    <>
      {(error || !src || src.trim() === "") && (
        <BoxGradient
          placeContent={"center"}
          textAlign="center"
          fontWeight="bold"
          fontSize="2xl"
          WebkitTextStroke=".03rem black"
          width={props.width}
          height={props.height}
          md={{
            fontSize: "3xl",
            WebkitTextStroke: ".05rem black",
          }}
        >
          <Box truncate textTransform="capitalize">
            {alt}
          </Box>
        </BoxGradient>
      )}

      <picture>
        {sources.map(({ mediaWidth, srcSet }, i) => (
          <source
            key={`${i}-${srcSet}`}
            media={`(max-width: ${mediaWidth}px)`}
            srcSet={`${srcSet} ${mediaWidth}w`}
            sizes={`${mediaWidth}px`}
          />
        ))}
        <Image
          display={error ? "none" : "block"}
          src={src}
          {...props}
          alt={alt}
          objectFit="cover"
          onError={() => {
            setError(true);
          }}
        />
      </picture>
    </>
  );
}
