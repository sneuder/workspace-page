import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    color: "#fff",
    fontFamily: "body",
    fontSize: "120px",
    fontWeight: "bold",
  },

  variants: {
    heroe: {
      textAlign: "center",
      fontSize: "xl",
    },
  },
});

export default Heading;
