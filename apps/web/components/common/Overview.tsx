import { Flex, Icon } from "@chakra-ui/react";
import JoinChatDialog from "../../features/chat/components/JoinChatDialog";
import CreateChatDialog from "@/features/chat/components/CreateChatDialog";
import RadialGlowBox from "../shared/RadialGlowBox";
import TextGradient from "../shared/TextGradient";
import Lightning from "../icons/Lightning";

export default function Overview() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      my={8}
      md={{ my: 0 }}
      h={"25vw"}
    >
      <TextGradient display={"none"} lg={{ display: "block" }}>
        Connect quickly
        <Icon size="2xl" scale={2} marginX={4}>
          <Lightning />
        </Icon>
        and share in real time
      </TextGradient>

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
