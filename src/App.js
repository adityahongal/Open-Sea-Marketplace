import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/Common";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";

function App() {
  return (
    <> 
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </ChakraProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
