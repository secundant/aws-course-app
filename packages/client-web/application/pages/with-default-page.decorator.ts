import { createPageDecorator } from '@app/client-web/application/pages/common/page-decorator';
import { CartModelProvider } from '@app/client-web/contexts/cart/cart-model.provider';
import { ThemeProvider } from '@app/client-web/contexts/common/theme.provider';

export const withDefaultPage = createPageDecorator({
  entries: [
    {
      Provider: ThemeProvider
    },
    {
      Provider: CartModelProvider
    }
  ]
});
