// AQUI HAVERA ALTERAÇÕES DE TEXTO, CORES, TAMANHOS DE FONTES, ESTILOS E LAYOUT

import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0rem",
  xsm: "43.125rem", //690px
  sm: "54.875rem", //878px
  md: "82.875rem", //1326px
  lg: "120rem", //1920px
};

const toastOptions = {
  duration: 3000,
  isClosable: true,
  containerStyle: {
    color: "white",
  },
};

export const defaultTheme = extendTheme({
  breakpoints,

  toast: toastOptions,

  components: {
    Select: {
      baseStyle: {
        _hover: {
          transform: "scale(1.01)",
        },
      },
    },

    // _active={{
    //   boxShadow: "inset -3px -1px 20px -3px rgba(0,0,0,0.75)",
    // }}
    // boxShadow="-1px 8px 10px -8px rgba(0,0,0,0.80)"

    Button: {
      // baseStyle: {
      //   _hover: {
      //     // transform: "scale(1.01)",
      //     boxShadow: "md",
      //     _disabled: {
      //       transform: "scale(1)",
      //       bgColor: "gray.400",
      //       opacity: "50%",
      //       color: "gray.200",
      //     },
      //   },
      // },
      variants: {
        primary: {
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },

          borderBottom: "4px solid #004B1F",
          _hover: {
            opacity: "90%",
            _disabled: { bgColor: "#005F27", opacity: "30%" },
          },
          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          bgColor: "#005F27",
          color: "white",
        },

        secondary: {
          textColor: "#005F27",
          borderWidth: "1px",
          borderColor: "#005F27",
          borderBottom: "4px solid #004B1F",

          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },
          _hover: {
            opacity: "90%",
            _disabled: { borderColor: "#005F27", opacity: "30%" },
          },
          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          // colorScheme: "black",
          // variant: "solid",
        },
        terciary: {
          color: "white",
          bgColor: "#0766C7",
          borderWidth: "1px",
          borderColor: "#005F27",
          borderBottom: "4px solid #004B1F",

          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },
          _hover: {
            opacity: "90%",
            _disabled: { borderColor: "#005F27", opacity: "30%" },
          },
          // boxShadow: "-1px 8px 10px -8px rgba(0,0,0,0.80)",
          // colorScheme: "black",
          // variant: "solid",
        },
        cancelAction: {
          bgColor: "#E30613",

          color: "white",
          borderBottom: "4px solid #A1000A",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid ",
          },
          _hover: {
            opacity: "90%",
            _disabled: { bgColor: "#E30613", opacity: "30%" },
          },
        },

        cancelActionSecondary: {
          textColor: "#E30613",
          borderWidth: "1px",
          borderColor: "#E30613",
          borderBottom: "4px solid #A1000A",
          _active: {
            boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.25) inset",
            borderBottom: "1px solid #A1000A ",
          },
          _hover: {
            opacity: "90%",
            _disabled: { borderColor: "#E30613", opacity: "30%" },
          },
        },
      },
    },
  },

  colors: {
    green: {
      "1": "#CCF381",
      "2": "",
      "3": "",
    },

    purple: {
      "1": "#4831D4",
      "2": "#3D155F",
    },
    gray: {
      "1": "#A39696",
      "2": "#F9F9F9",
    },
  },

  fonts: {
    heading: "Open Sans, sans-serif",
    body: "Open Sans, sans-serif",
  },

  fontSizes: {
    menubar: "24px",
    title: "54px",
    title2: "46px",
    title3: "40px",
    subtitle: "15px",
    subtitle2: "24px",
    subtitle3: "21px",
    subtitle4: "18px",
    text1: "16px",
    text2: "14px",
    text3: "12px",
    text4: "10px",
    h1: "40px",
    h2: "28px",
  },

  textStyles: {
    regular: {
      fontWeight: "400",
    },
    medium: {
      fontWeight: "500",
    },
    semibold: {
      fontWeight: "600",
    },
    bold: {
      fontWeight: "700",
    },
  },

  styles: {
    global: {
      body: { bg: "purple.1", color: "green.1" },
    },
  },
});
