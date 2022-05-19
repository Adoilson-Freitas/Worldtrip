import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Card from "../components/Card";
import Slide from "../components/Slide";
import Header from "../components/Header";
import api from "../services/api";

interface ContinentsData {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface HomeProps {
  continents: ContinentsData[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Header />
      <Box
        h={{ base: 163, md: 335 }}
        w="100%"
        backgroundImage="url('/images/background.jpg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          h="100%"
          w="100%"
          maxWidth={1160}
          mx="auto"
          align="center"
          position="relative"
        >
          <Stack
            spacing="5"
            w="100%"
            maxWidth={524}
            mx={{ base: "4", xl: "0" }}
          >
            <Heading
              fontSize={["lg", "xl", "4xl"]}
              fontWeight="medium"
              color="gray.50"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text fontSize={["sm", "xl"]} color="gray.100">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>
          <Image
            src="/images/airplane.png"
            alt="airplane"
            position="absolute"
            bottom={-33}
            right="0"
            display={{ base: "none", lg: "block" }}
          />
        </Flex>
      </Box>
      <Flex
        w="100%"
        maxWidth={1160}
        mx="auto"
        mt={{ base: "9", xl: "20" }}
        align="center"
        justify={{ base: "center", md: "space-between" }}
        wrap="wrap"
        px={{ base: 4, xl: 0 }}
      >
        <Card
          name="vida noturna"
          image="/images/cocktail.svg"
          mt={{ base: "6", xl: 0 }}
        />
        <Card name="praia" image="/images/surf.svg" mt={{ base: "6", xl: 0 }} />
        <Card
          name="moderno"
          image="/images/building.svg"
          mt={{ base: "6", xl: 0 }}
        />
        <Card
          name="clássico"
          image="/images/museum.svg"
          mt={{ base: "6", xl: 0 }}
        />
        <Card
          name="e mais..."
          image="/images/earth.svg"
          ml={[0, 30]}
          mt={{ base: "6", xl: 0 }}
        />
      </Flex>
      <Box
        w={{ base: "60px", xl: "90px" }}
        h="2px"
        bg="gray.900"
        mx="auto"
        mt={{ base: "9", xl: "20" }}
      />
      <Text
        textAlign="center"
        fontSize={{ base: "xl", xl: "4xl" }}
        color="gray.900"
        fontWeight="medium"
        mx="auto"
        my="6"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Box w="100%" maxWidth={1240} px={{ base: 0, xl: "4" }} mx="auto" mb="10">
        <Slide data={continents} />
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  const continents = response.data;

  return {
    props: {
      continents,
    },
  };
};
