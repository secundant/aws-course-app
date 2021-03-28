import React, { memo } from 'react';
import { PageLink } from '@app/client-web/components/common/Page/Link';
import { CartModelContext } from '@app/client-web/contexts/cart/cart-model.context';
import { useRequiredContext } from '@app/client-web/hooks/common/useRequiredContext';
import { Cart } from '@app/uikit-web/Cart';

export const HeaderCart = memo(() => {
  const cartModel = useRequiredContext(CartModelContext);

  return (
    <PageLink href="/cart">
      <Cart value={cartModel.items.length} />
    </PageLink>
  );
});

HeaderCart.displayName = 'HeaderCart';
