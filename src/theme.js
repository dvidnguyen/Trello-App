import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
// import { teal, cyan, orange } from '@mui/material/colors';
// import { BorderColor, Height } from '@mui/icons-material';
const APP_BAR_HEIGHT ='58px';
const BROAD_BAR_HEIGHT ='62px';
const BROAD_CONTENT_HEIGHT =  `calc(100vh - ${APP_BAR_HEIGHT} - ${BROAD_BAR_HEIGHT})`
// Create a theme instance.
const theme = extendTheme({
  trello: {
    navBarHeight: APP_BAR_HEIGHT,
    broadBarHeight: BROAD_BAR_HEIGHT,
    broadContentHeight :BROAD_CONTENT_HEIGHT,
  },
  // colorSchemes: {
  //   light: { 
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange,
    
  //     },
  //     spacing: (factor) => `${0.25 * factor}rem`
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange,
      
  //     },
  //     spacing: (factor) => `${0.25 * factor}rem`
  //   },
  // },
 components: {
    // Name of the component
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          '*::-webkit-scrollbar ':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb ':{
            backgroundColor:'#ecf0f1',
            borderRadius:'4px'
            
          },
          '*::-webkit-scrollbar-thumb:hover ':{
            backgroundColor:'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
            textTransform: 'none',
            borderWidth: '0.4px'
        },
      },
    },
    MuiTypography:{
      styleOverrides:{
        root:{
          '&.MuiTypography-body1':{fontSize:'0.9rem'}
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({theme})=>({
          // color:theme.palette.primary.light,
          fontSize:'0.975rem',
          // '.MuiOutlinedInput-notchedOutline':{
          //   borderColor:theme.palette.primary.light
          // },
          // '&:hover':{
          //    borderColor:theme.palette.primary.light
          // },
          '&:fliedset':{ borderWidth:'0.5px !important'},
          "&:hover fieldset": { borderWidth:'1px !important'},
          "&.Mui-focused fieldset": {borderWidth:'1px !important'},
        })
      },
    },
  },
});

export default theme