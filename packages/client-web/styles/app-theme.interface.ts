import { createMuiTheme } from '@material-ui/core';
import { UikitTheme } from '@app/uikit-web/theme/uikit-theme.interface';

// eslint-disable-next-line
export interface AppTheme extends UikitTheme {}
export interface AppThemeCreator {
  (options: AppThemeCreatorOptions): AppTheme;
}

export interface AppThemeCreatorOptions {
  createMui: MuiThemeCreator;
}

export type MuiThemeCreator = typeof createMuiTheme;
export type ThemeDeviceType = 'mobile' | 'tablet' | 'desktop';
