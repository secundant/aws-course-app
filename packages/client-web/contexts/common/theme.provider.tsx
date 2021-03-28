import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import React, { memo, useEffect, useMemo } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { createDefaultTheme } from '@app/client-web/styles/themes/default';

export const ThemeProvider = memo(({ children }) => {
  const createMuiThemeAdapter = useMemo(() => createMuiTheme, []);

  const theme = useMemo(
    () =>
      createDefaultTheme({
        createMui: createMuiThemeAdapter
      }),
    [createMuiThemeAdapter]
  );

  if (process.browser) {
    useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');

      jssStyles?.parentElement?.removeChild(jssStyles);
    }, []);
  }

  return (
    <MuiThemeProvider theme={theme.mui}>
      <SCThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          {children}
        </StylesProvider>
      </SCThemeProvider>
    </MuiThemeProvider>
  );
});

ThemeProvider.displayName = 'ThemeProvider';
