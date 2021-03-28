import { IconButton, Typography } from '@material-ui/core';
import { Add, Remove, ShoppingCart } from '@material-ui/icons';
import React, { memo, useCallback } from 'react';
import { CartModelContext } from '@app/client-web/contexts/cart/cart-model.context';
import { Product } from '@app/client-web/domain';
import { useRequiredContext } from '@app/client-web/hooks/common/useRequiredContext';

export interface AddToCartProps {
  product: Product;
}

export const AddToCart = memo(({ product }: AddToCartProps) => {
  const cartModel = useRequiredContext(CartModelContext);

  const handleAdd = useCallback(() => cartModel.addProduct(product), [cartModel, product]);
  const handleSub = useCallback(() => cartModel.removeProduct(product), [cartModel, product]);
  const handleCreateNew = useCallback(() => cartModel.addProduct(product), [cartModel, product]);

  if (cartModel.hasProduct(product)) {
    const item = cartModel.getProductItem(product);

    return (
      <>
        <IconButton onClick={handleSub}>
          <Remove color="secondary" />
        </IconButton>
        <Typography align="center">{item.count}</Typography>
        <IconButton onClick={handleAdd}>
          <Add color="secondary" />
        </IconButton>
      </>
    );
  } else {
    return (
      <IconButton onClick={handleCreateNew}>
        <ShoppingCart color="secondary" />
      </IconButton>
    );
  }
});

AddToCart.displayName = 'AddToCart';
