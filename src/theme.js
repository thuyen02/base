import { extendTheme } from '@chakra-ui/react';

const baseTheme = extendTheme({
  colors: {
    bg_gray: '#F6F6F6',
    text_gray: '#919FB6',
    white: '#fff',
    purple: '#8767E1',
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
});

export default baseTheme;
