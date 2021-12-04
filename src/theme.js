import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: `'Poppins', sans-serif`,
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', '#121212')(props),
        transition: '0.5s ease'
      }
    })
  },
  breakpoints
});

export default theme;
