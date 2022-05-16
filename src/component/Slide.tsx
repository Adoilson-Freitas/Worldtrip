import React, { useRef, useState } from "react";
import { Center, Flex, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Slide() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
    >
      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            Europa
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            O continente mais antigo.
          </Text>
        </Center>
        <Image src="/images/europe.svg" alt="Europe" />
      </SwiperSlide>

      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            Ásia
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Image src="/images/asia.svg" alt="Asia" />
      </SwiperSlide>

      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            América do Norte
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Image src="/images/north-america.svg" alt="North America" />
      </SwiperSlide>

      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            América do Sul
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Image src="/images/south-america.svg" alt="South America" />
      </SwiperSlide>

      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            África
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Image src="/images/africa.svg" alt="Africa" />
      </SwiperSlide>

      <SwiperSlide>
        <Center>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="48px"
            mt="300px"
          >
            Oceania
          </Text>
          <Text
            position="fixed"
            color="white"
            fontWeight="700"
            fontSize="24px"
            mt="400px"
          >
            Lorem ipsum dolor sit amet
          </Text>
        </Center>
        <Image src="/images/oceania.svg" alt="Oceania" />
      </SwiperSlide>
    </Swiper>
  );
}
