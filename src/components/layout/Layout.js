import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Header } from '../header/Header';

export const AppLayout = ({ children }) => {
  return (
    <Box>
      <ColorModeSwitcher position="fixed" bottom="15" left="15" />
      <Header></Header>
      <Container maxW="container.xl" paddingTop="100px">
        {children}
      </Container>
    </Box>
  );
};
