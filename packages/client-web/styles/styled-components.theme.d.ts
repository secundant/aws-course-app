import { AppTheme } from '@app/client-web/styles/app-theme.interface';

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends AppTheme {}
}
