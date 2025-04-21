import { Icon, Text, TextProps } from "@chakra-ui/react";
import { PiLightningFill } from "react-icons/pi";

interface Props extends TextProps {
  textExtension?: string;
}

export default function MainLogo({ textExtension, ...props }: Props) {
  return (
    <Text
      fontSize="xl"
      textTransform={"uppercase"}
      fontWeight="bold"
      textAlign="center"
      display="flex"
      alignItems="center"
      {...props}
    >
      fastty
      <Icon colorPalette={"yellow"} color={"yellow.400"}>
        <PiLightningFill transform="scale(1.2)" />
      </Icon>
      chat {textExtension}
    </Text>
  );
}
