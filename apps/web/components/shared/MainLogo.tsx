import { Icon, Text, TextProps } from "@chakra-ui/react";
import Lightning from "@/components/icons/Lightning";

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
      <Icon size="2xl">
        <Lightning />
      </Icon>
      chat {textExtension}
    </Text>
  );
}
