import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { AppLayout } from '../components/layout/Layout';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <AppLayout>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}>
          <Component {...pageProps} />
        </ColorModeProvider>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
