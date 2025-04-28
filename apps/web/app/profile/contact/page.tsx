import ListContact from "@/features/profile/components/ListContact";
import { Flex, Heading } from "@chakra-ui/react";

export default function ProfileContactPage() {
  return (
    <Flex direction={"column"} gap={4} as="section">
      <Heading as="h3" fontSize="xl" fontWeight="bold">
        Contacts
      </Heading>
      <ListContact />
    </Flex>
  );
}
