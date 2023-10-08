import { defineStyleConfig } from "@chakra-ui/react"

const Button = defineStyleConfig({
  baseStyle: {
  },
  variants: {
    primary: {
      background: "forestGreen",
      color: "#fff",
      padding: "1.5rem",
      borderRadius: "1rem",
      fontWeight: "600"
    }
  }
})

export default Button
