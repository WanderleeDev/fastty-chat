import { Flex, Text, Icon } from "@chakra-ui/react";
import JoinChatDialog from "../../features/chat/components/JoinChatDialog";
import { PiLightningFill } from "react-icons/pi";
import CreateChatDialog from "@/features/chat/components/CreateChatDialog";
import RadialGlowBox from "../shared/RadialGlowBox";

export default function Overview() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      my={8}
      md={{ my: 0 }}
      h={"25vw"}
    >
      <Text
        fontSize={"5xl"}
        display={"none"}
        position={"relative"}
        maxW={"50vw"}
        fontWeight={"bold"}
        background={"linear-gradient(to bottom,#a6f8eb,#33a09e,#204a4d)"}
        letterSpacing={"wide"}
        bgClip="text"
        lg={{ display: "block" }}
        xl={{ fontSize: "6xl" }}
      >
        Connect quickly{" "}
        <Icon mr={2} aria-hidden="true">
          <PiLightningFill color="yellow" transform="scale(1.2)" />
        </Icon>
        and share in real time
      </Text>

      <RadialGlowBox
        display="flex"
        flexWrap="wrap"
        position="relative"
        justifyContent="center"
        gap={4}
        mx={"auto"}
        w={"full"}
        flexDirection={"column"}
        lg={{ w: "20vw" }}
      >
        <CreateChatDialog />
        <JoinChatDialog />
      </RadialGlowBox>
    </Flex>
  );
}
