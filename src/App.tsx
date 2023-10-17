import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

import Home from "./pages/home";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider>
  );
};

export default App;
