import {
  Box,
  VStack,
  Heading,
  Text,
  Avatar,
  Button,
  HStack,
  Card,
  CardBody,
  SimpleGrid,
  Icon,
  Stat,
  FormatNumber,
} from "@chakra-ui/react";
import {
  BiCog,
  BiShield,
  BiStar,
  BiUser,
  BiBell,
  BiChat,
} from "react-icons/bi";

const PROFILE_STATS = [
  { label: "Salas", value: "12", icon: BiChat },
  { label: "Seguidores", value: "238", icon: BiUser },
  { label: "Rating", value: "4.8", icon: BiStar },
];

const MENU_ITEMS = [
  { icon: BiCog, label: "Configuración de cuenta" },
  { icon: BiBell, label: "Notificaciones" },
  { icon: BiShield, label: "Privacidad y seguridad" },
];

export default function ProfilePage() {
  return (
    <Box pt="4">
      <VStack spaceY="6" align="stretch">
        <VStack spaceY="4" align="center">
          <Avatar.Root size="2xl" borderWidth="4px" shadow="lg">
            <Avatar.Image src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
          </Avatar.Root>
          <Box textAlign="center">
            <Heading size="lg">Alex Johnson</Heading>
            <Text color="gray.500" mt="1">
              @alexj
            </Text>
          </Box>
          <Button colorScheme="brand" size="sm" rounded="full" px="8">
            Editar Perfil
          </Button>
        </VStack>

        <SimpleGrid columns={3} scaleY="4">
          {PROFILE_STATS.map((stat) => {
            const IconComponent = stat.icon;

            return (
              <Card.Root key={stat.label} variant="outline">
                <CardBody>
                  <Stat.Root>
                    <Stat.Label color="gray.500">
                      <HStack spaceY="1">
                        <Icon size="md">
                          <IconComponent />
                        </Icon>
                        <Text>{stat.label}</Text>
                      </HStack>
                    </Stat.Label>
                    <FormatNumber
                      value={+stat.value}
                      notation="compact"
                      compactDisplay="short"
                    />
                  </Stat.Root>
                </CardBody>
              </Card.Root>
            );
          })}
        </SimpleGrid>

        <VStack spaceY="2" align="stretch">
          {MENU_ITEMS.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              justifyContent="flex-start"
              h="14"
            >
              {item.label}
            </Button>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
