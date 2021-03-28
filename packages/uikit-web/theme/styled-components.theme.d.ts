import { UikitTheme } from '@app/uikit-web/theme/uikit-theme.interface';

declare module 'styled-components' {
  // eslint-disable-next-line
  interface DefaultTheme extends UikitTheme {}
}
