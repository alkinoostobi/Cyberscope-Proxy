import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import themeOptions from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

const BackgroundContainer = styled('div')`
  background: linear-gradient(45deg, #FF7F50, #DB7093);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentContainer = styled('div')`
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: auto;
  color : white; 
`;

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Create a custom theme with Montserrat font
  const theme = responsiveFontSizes(
    createTheme({
      ...themeOptions,
      typography: {
        fontFamily: 'Montserrat, sans-serif',
      },
    })
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundContainer>
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </BackgroundContainer>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
