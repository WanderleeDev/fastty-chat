import FacebookColor from "@/components/icons/FacebookColor";
import Google from "@/components/icons/Google";
import { Flex, IconButton } from "@chakra-ui/react";

export default function RecoveryAccount() {
  return (
    <Flex direction={"column"} gap={4}>
      <IconButton size={"lg"} variant={"surface"} fontWeight={"300"}>
        <Google transform="scale(1.2)" />
        Continue with Google
      </IconButton>
      <IconButton size={"lg"} variant={"surface"} fontWeight={"300"}>
        <FacebookColor transform="scale(1.2)" />
        Continue with Facebook
      </IconButton>
    </Flex>
  );
}
