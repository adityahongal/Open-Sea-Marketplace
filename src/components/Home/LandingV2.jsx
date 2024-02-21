// This is done using chakra carousel


import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { capsFirst } from "../../utils";
import "fontsource-inter/500.css";
import theme from "../../utils/theme";

// React-Slick Slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ChakraProvider,
  extendTheme,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
} from "@chakra-ui/react";

import ChakraCarousel from "../../Assets/ChakraCarousel";

// import style from CSS
import "../../Assets/Landing.css";

const data = [
  {
    id: 1,
    image:
      "https://i.seadn.io/s/raw/files/a286fdea90dbe8b96ea1c274aff1576f.jpg",
    title: "Origami Ape",
    floor: 2.45,
  },
  {
    id: 2,
    image:
      "https://i.seadn.io/s/raw/files/a24b23968a93875707c783dba76741b3.png",
    title: "Contra boy #01",
    floor: 16.3,
  },
  {
    id: 3,
    image:
      "https://i.seadn.io/s/raw/files/b49c1f1e10a8baff54f2bb44ae877fcf.png",
    title: "basha bhai #786",
    floor: 0.05,
  },
  {
    id: 4,
    image:
      "https://i.seadn.io/s/raw/files/10e521accd2247793bd64886a7136f45.jpg",
    title: "Justin odisho #089",
    floor: 8.6,
  },
  {
    id: 5,
    image:
      "https://i.seadn.io/s/raw/files/517c22dea837ad7946c9e22141bca5ac.gif",
    title: "Bekkin Hada #698",
    floor: 0.05,
  },
  {
    id: 6,
    image: "https://i.seadn.io/gcs/files/a24740de38bf1af29bd6a69e5acac40b.png",
    title: "Piller Patil #69",
    floor: 0.05,
  },
  {
    id: 7,
    image:
      "https://i.seadn.io/s/raw/files/ae0fc06714ff7fb40217340d8a242c0e.gif",
    title: "Ammani Paapu #11",
    floor: 0.05,
  },
  {
    id: 8,
    image:
      "https://i.seadn.io/s/raw/files/6d460bf95261c56d99fee6d64eb031c0.jpg",
    title: "Flower girls #9343",
    floor: 0.05,
  },
];

const Landing = () => {
  return (
    <Box>
      <ChakraProvider theme={extendTheme(theme)}>
        <Container
          py={8}
          px={4}
          maxW={{
            base: "100%",
            sm: "35rem",
            md: "43.75rem",
            lg: "57.5rem",
            xl: "75rem",
            xxl: "87.5rem",
          }}
        >
          <ChakraCarousel gap={32}>
            {data.map((item, index) => (
              <Box key={index} px={2}>
              <Flex
                key={index}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                justifyContent="space-between"
                flexDirection="column"
                overflow="hidden"
                color="gray.300"
                bg="base.d100"
                rounded={10}
                flex={1}
                p={5}
                marginX={1} // Add margin between cards
              >
                <VStack mb={6}>
                <Image
                  src={item.image}
                  w="100%" // Set width to 100%
                  h="auto" 
                  objectFit="cover"/>
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    textAlign="left"
                    w="full"
                    mb={2}
                  >
                    {capsFirst(item.title)}
                  </Heading>
                  <Heading
                  fontSize={{ base: "lg", md: "xl" }}
                  textAlign="left"
                  w="full"
                  mb={2}
                  >
                    Floor: {item.floor} ETH
                    </Heading>  
                </VStack>
              </Flex>
              </Box>
            ))}
          </ChakraCarousel>
        </Container>
      </ChakraProvider>
    </Box>
  );
};

export default Landing;
