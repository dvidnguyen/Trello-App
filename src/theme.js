import { deepOrange } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, cyan, orange } from '@mui/material/colors';

// Create a theme instance.
const theme = extendTheme({
  trello: {
    navBarHeight: "48px",
    broadBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
    
      },
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      
      },
      spacing: (factor) => `${0.25 * factor}rem`
    },
  },
  // ...other properties
});

export default theme