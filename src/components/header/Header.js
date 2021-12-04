import React from 'react';
import { Flex, Box, Spacer, Text, HStack, Divider, Button } from '@chakra-ui/react';
import { NavItem } from './NavItem';
import { NavLogo } from './NavLogo';

export const Header = () => {
  return (
    <Box as="header" position="fixed" width="100%" backdropFilter="blur(10px)" zIndex="9999">
      <Flex as="nav" marginInline="auto" padding="4" justifyContent="center" alignContent="center">
        <NavLogo />
        <Spacer />
        <HStack spacing="24px">
          <HStack
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontWeight="bold"
            spacing="24px">
            <NavItem href="/about">
              <Text>About</Text>
            </NavItem>
            <NavItem href="/projects">
              <Text>Projects</Text>
            </NavItem>
          </HStack>
          <Divider orientation="vertical" />
          <HStack display="flex" justifyContent="center" alignItems="center" spacing="24px">
            <NavItem href="/contact">
              <Button variant="outline">CONTACT</Button>
            </NavItem>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};
