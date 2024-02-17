import React from "react";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./components/Common";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <AppRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
