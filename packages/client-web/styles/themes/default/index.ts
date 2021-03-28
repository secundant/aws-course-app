import { AppTheme, AppThemeCreatorOptions } from '@app/client-web/styles/app-theme.interface';

export function createDefaultTheme({ createMui }: AppThemeCreatorOptions): AppTheme {
  return {
    mui: createMui()
  };
}
