import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    lightBlue: {
      50: "#f7f7f7",
      100: "#E7F6F2",
      200: "#C4EDE2",
      300: "#A1E4D2",
      500: "#5DC9B2",
    },
    darkBlue: {
      100: "#395B64",
      200: "#2E4A51",
      300: "#243940",
      500: "#1A282F",
      800: "#0c1214",
    },
  },
  styles: {
    global(props) {
      return {
        body: {
          bg: props.colorMode === "dark" ? "darkBlue.800" : "lightBlue.50",
          color: props.colorMode === "dark" ? "white" : "darkBlue.800",
        },
      };
    },
  },
  components: {
    Button: {
      baseStyle: {
        px: 6,
        transition: "0.4s",
      },
      variants: {
        submitBtn: (props) => ({
          width: "100%",
          fontWeight: "bold",
          fontSize: "20px",
          bg: "linear-gradient(180deg, #395B64 0%, #00B4DB 100%)",
          borderRadius: "0px",
          textAlign: "center",
          // marginRight: "50px",
          p: "10px 15px",
          color: props.colorMode === "dark" ? "white" : "darkBlue.500",
          border: "1px solid",
          borderColor:
            props.colorMode === "dark" ? "darkBlue.100" : "lightBlue.500",
          _hover: {
            bg:
              props.colorMode === "dark"
                ? "linear-gradient(180deg, #00B4DB 0%,  #2E4A51 100%)"
                : "linear-gradient(180deg, #00B4DB 0%, #5DC9B2 100%)",
          },
        }),
        solid: (props) => ({
          rounded: "full",
          bg: props.colorMode === "dark" ? "darkBlue.100" : "lightBlue.500",
          color: props.colorMode === "dark" ? "white" : "darkBlue.500",
          _hover: {
            bg: props.colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
          },
        }),
        outline: (props) => ({
          rounded: "full",
          bg: "transparent",
          color: props.colorMode === "dark" ? "white" : "darkBlue.500",
          border: "1px solid",
          borderColor:
            props.colorMode === "dark" ? "darkBlue.100" : "lightBlue.500",
          _hover: {
            bg: props.colorMode === "dark" ? "darkBlue.200" : "lightBlue.300",
          },
        }),
      },
      gost: {
        bg: "transparent",
        color: "darkBlue.500",
        border: "1px solid",
        borderColor: "darkBlue.500",
        _hover: {
          bg: "darkBlue.200",
        },
      },

      defaultProps: {
        variant: "solid",
      },
    },
  },
});

export default theme;
