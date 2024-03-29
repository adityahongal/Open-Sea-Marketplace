import React from "react";
import PropTypes from "prop-types";
import { VStack, Box } from "@chakra-ui/react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
      <>

      <Box width={"full"}>
        <NavBar />
      </Box>
      <Box>
      <Box w={"full"}>
        {children}
      </Box>
      </Box>
      <Box width={"full"}>
        <Footer />
      </Box>

    </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default Layout;