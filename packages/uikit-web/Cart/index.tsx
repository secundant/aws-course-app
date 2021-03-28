import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React, { memo } from 'react';

export interface CartProps {
  value: number | null;
}

export const Cart = memo(({ value }: CartProps) => (
  <IconButton aria-label="show 4 new mails" color="inherit">
    <Badge badgeContent={value} color="secondary">
      <ShoppingCart />
    </Badge>
  </IconButton>
));

Cart.displayName = 'Cart';
