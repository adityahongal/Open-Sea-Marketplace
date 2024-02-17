import {extendTheme} from "@chakra-ui/react";

// Color mode config
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

const colors = {
    golden: "#F7D09C", // Rich gold
        neon_blue: "hsl(210, 100%, 75%)", // Vibrant blue neon
        neon_pink: "hsl(330, 100%, 75%)", // Vivid pink neon
        neon_red: "#FF0000", // Define a neon red color
        neon_orange: "#F78DA7", // Define a neon orange color
};

const theme = extendTheme({
    fonts: {
        body: "Roboto Slab, serif",
        heading: "Roboto Slab, serif",
    },
    colors: {
        
        button_gradient: `linear-gradient(97.73deg, ${colors.golden} 0%, ${colors.neon_blue} 100%)`,
        button_gradient_light: `linear-gradient(97deg, rgba(167,29,41,1) 0%, rgba(177,62,68,1) 100%)`,
        background_gradient_1: `linear-gradient(242.01deg, ${colors.golden} 6.33%, ${colors.neon_blue} 43.96%, ${colors.neon_pink} 82.55%)`,
        background_gradient_2: `linear-gradient(242.01deg, #fddcdc 6.33%, #e9dfff 43.96%, #e1f4ff 82.55%)`,

        brand_pink: {
          900: colors.neon_pink,
          100: colors.golden,
        },
        brand_red: {
          900: colors.neon_red,
          500: colors.neon_orange,
        },
      },
      components: {
        Button: {
          baseStyle: {
            fontWeight: "bold",
          },
        },
        Heading: {
          baseStyle: {
            color: "black",
          },
        },
      },
      config
      
});

export default theme;