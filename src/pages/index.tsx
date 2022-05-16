import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../component/Banner";
import Slide from "../component/Slide";

export default function Home() {
  return (
    <Stack maxWidth={1440}>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>
      <Banner />

      <Box maxWidth={1080} alignSelf="center" pb="40px">
        <Flex justify="space-around" align="center">
          <Image src="/images/cocktail.svg" alt="Cocktail" />
          <Image src="/images/surf.svg" alt="Surf" />
          <Image src="/images/building.svg" alt="Building" />
          <Image src="/images/museum.svg" alt="Museum" />
          <Image src="/images/earth.svg" alt="Earth" />
        </Flex>

        <Box fontSize="36px" fontWeight={500}>
          <Text marginTop="70px" align="center">
            Vamos nessa?
          </Text>
          <Text align="center">Então escolha seu continente</Text>
        </Box>
        <Slide />
      </Box>
    </Stack>
  );
}
