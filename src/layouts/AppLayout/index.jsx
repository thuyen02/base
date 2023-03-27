import {
  Box,
  ChakraProvider,
  Grid,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import baseTheme from '../../theme';

export const AppLayout = ({ children }) => {
  return (
    <ChakraProvider theme={baseTheme}>
      <Box minH="100vh" backgroundColor={baseTheme.colors.bg_gray}>
        <Grid templateColumns="275px 1fr">
          <Box backgroundColor={baseTheme.colors.white} py="8" px="6">
            <Text fontSize="md" color={baseTheme.colors.purple}>
              Menu
            </Text>

            <List spacing={10} px="2" py="8">
              <ListItem cursor="pointer">Garage owner</ListItem>
            </List>
          </Box>
          <Box>
            <Grid templateRows="1fr max-content">
              <Box height={74} p={4} backgroundColor={baseTheme.colors.white}>
                Header
              </Box>
              <Box height="calc(100vh - 122px)" my="6" mx="4">
                <Box backgroundColor={baseTheme.colors.white}>{children}</Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
