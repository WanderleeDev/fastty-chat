import { Box, SimpleGrid, Text, Heading, Icon } from "@chakra-ui/react";
import { FaLock, FaBolt, FaComments, FaPalette } from "react-icons/fa";

const features = [
  {
    title: "Privacy First",
    description: "Your conversations are encrypted for maximum security",
    icon: FaLock,
    iconColor: "salmon",
    color: "cyan.400",
    gridArea: "1 / 1 / 2 / 5",
  },
  {
    title: "Real-time Communication",
    description: "Fluid messaging with instant updates",
    icon: FaComments,
    iconColor: "teal.400",
    color: "red.400",
    gridArea: "1 / 5 / 3 / 7",
  },
  {
    title: "Fast Connection",
    description: "Enter your rooms instantly with a seamless experience",
    icon: FaBolt,
    iconColor: "yellow.300",
    color: "green.400",
    gridArea: "2 / 1 / 3 / 3",
  },
  {
    title: "Friendly Interface",
    description: "Minimalist design focused on the user",
    icon: FaPalette,
    iconColor: "cyan.500",
    color: "blue.200",
    gridArea: "2 / 3 / 3 / 5",
  },
];

export default function WhyChooseUs() {
  return (
    <Box>
      <Heading as="h2" fontSize="xl" fontWeight="bold" mb="4">
        Why choose us?
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 6 }}
        gap={6}
        autoRows="200px"
        color="gray.800"
      >
        {features.map(
          ({ title, description, icon, iconColor, color, gridArea }) => {
            const IconComponent = icon;

            return (
              <Box
                className="group"
                key={title}
                md={{ gridArea: gridArea }}
                bg={color}
                borderRadius="2xl"
                p={6}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                position="relative"
                overflow="hidden"
              >
                <Heading
                  size="md"
                  mb={2}
                  display={"flex"}
                  alignItems="center"
                  justifyItems="center"
                  position="relative"
                  zIndex={1}
                  gap={2}
                  as="h3"
                  lg={{ fontSize: "xl" }}
                  transition="transform 0.2s ease-in-out"
                  _groupHover={{ transform: "translateX(-2rem)" }}
                >
                  <Icon
                    fontSize={"2xl"}
                    color={iconColor}
                    transition="opacity 0.2s ease-in-out"
                    _groupHover={{ opacity: 0 }}
                  >
                    <IconComponent />
                  </Icon>
                  {title}
                </Heading>
                <Text color="gray.600" position="relative" zIndex={1}>
                  {description}
                </Text>

                <Icon
                  position={"absolute"}
                  opacity={0}
                  right={2}
                  transform={"translateX(150%)"}
                  bottom={2}
                  fontSize={"9xl"}
                  color={iconColor}
                  zIndex={0}
                  transition="opacity 0.2s ease-in-out, transform 0.3s ease-in-out"
                  _groupHover={{ opacity: 0.5, transform: "translateX(0%)" }}
                >
                  <IconComponent />
                </Icon>
              </Box>
            );
          }
        )}
      </SimpleGrid>
    </Box>
  );
}
