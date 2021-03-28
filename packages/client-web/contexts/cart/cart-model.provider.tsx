import React, { memo, ReactNode, useMemo, useState } from 'react';
import { CartModelContext } from '@app/client-web/contexts/cart/cart-model.context';
import { CartItem } from '@app/client-web/domain';
import { CartModel } from '@app/client-web/domain/models/cart.model';

export interface CartModelProviderProps {
  children: NonNullable<ReactNode>;
}

export const CartModelProvider = memo(({ children }: CartModelProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const model = useMemo(() => new CartModel(items, setItems), [items]);

  return <CartModelContext.Provider value={model}>{children}</CartModelContext.Provider>;
});

CartModelProvider.displayName = 'CartModelProvider';
