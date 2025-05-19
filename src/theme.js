import { deepOrange } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { teal, cyan, orange } from '@mui/material/colors';
import { BorderColor } from '@mui/icons-material';

// Create a theme instance.
const theme = extendTheme({
  trello: {
    navBarHeight: "58px",
    broadBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
    
      },
      spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      
      },
      spacing: (factor) => `${0.25 * factor}rem`
    },
  },
 components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
         root: {
            textTransform: 'none'
        },
       
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({theme})=>({
          color:theme.palette.primary.light,
          fontSize:'0.975rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor:theme.palette.primary.light
          },
          '&:hover':{
             borderColor:theme.palette.primary.light
          },
          '&:fliedset':{
            borderWidth:'1px !important'
          }
            
        })
      },
    },
  },
});

export default theme