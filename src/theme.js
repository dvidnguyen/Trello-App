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
        background: {
          default: '#f5f5f5',
          paper: '#ffffff'
        }
      },
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
        background: {
          default: '#121212',
          paper: '#1e1e1e'
        }
      },
      spacing: (factor) => `${0.25 * factor}rem`
    },
  },
  // ...other properties
});

export default theme