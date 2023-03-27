import { Box, ChakraProvider, Container, Grid } from '@chakra-ui/react';
import React from 'react';
import baseTheme from '../../theme';

export const AppShoppingLayout = ({ children }) => {
  return (
    <ChakraProvider theme={baseTheme}>
      <Box minH="100vh" backgroundColor={baseTheme.colors.white}>
        <Container maxW="7xl" height="100%">
          <Grid gridTemplateRows="80px max-content 300px">
            <Box pt={6} py={4}>
              Header
            </Box>
            <Box>{children}</Box>
            <Box>Footer</Box>
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};
