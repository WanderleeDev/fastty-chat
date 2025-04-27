import { Flex, Icon } from "@chakra-ui/react";
import JoinChatDialog from "../../features/chat/components/JoinChatDialog";
import { PiLightningFill } from "react-icons/pi";
import CreateChatDialog from "@/features/chat/components/CreateChatDialog";
import RadialGlowBox from "../shared/RadialGlowBox";
import TextGradient from "../shared/TextGradient";

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
        Connect quickly{" "}
        <Icon mr={2} aria-hidden="true">
          <PiLightningFill color="yellow" transform="scale(1.2)" />
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
