import React from 'react';
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavItem = (props) => {
  const { children, href, ...linkProps } = props;
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <ChakraLink
        color={isActive ? useColorModeValue('black', 'white') : 'gray.500'}
        _hover={{ color: useColorModeValue('black', 'white') }}
        _activeLink={{ color: useColorModeValue('black', 'white') }}
        {...linkProps}>
        {children}
      </ChakraLink>
    </Link>
  );
};
