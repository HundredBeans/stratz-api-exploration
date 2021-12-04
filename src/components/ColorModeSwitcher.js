import React from 'react';
import { useColorMode, useColorModeValue, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const changeColorMode = (e) => {
    e.stopPropagation();
    toggleColorMode();
  };
  const val = useColorModeValue(false, true);
  const SwitchIcon = useColorModeValue(FaSun, FaMoon);

  return (
    <FormControl
      width="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      rounded="full"
      zIndex="1000"
      {...props}>
      <FormLabel htmlFor="color-switcher" mb="0">
        <SwitchIcon />
      </FormLabel>
      <Switch display="flex" id="color-switcher" onChange={changeColorMode} isChecked={val} />
    </FormControl>
  );
};
