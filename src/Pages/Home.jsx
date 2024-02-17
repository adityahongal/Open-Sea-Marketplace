import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w={"full"} flex={1}>
      <Text
        bgGradient="linear(to-l, #7669CA, #FA1180)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Home Page
      </Text>
    </Box>
  );
};

export default Home;
