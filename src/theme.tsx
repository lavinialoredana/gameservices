import { extendTheme } from "@chakra-ui/react";

const styles = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
        bg: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(4,112,189,1) 68%, rgba(0,212,255,1) 100%)",
        color: "white",
      },
      colors: {
        pink: {
          500: "#D53F8C",
        },
      },
    },
  },
});

export default styles;
