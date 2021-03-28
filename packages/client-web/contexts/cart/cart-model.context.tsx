import React from 'react';
import { CartModel } from '@app/client-web/domain/models/cart.model';

export const CartModelContext = React.createContext<CartModel | null>(null);

CartModelContext.displayName = 'CartModelContext';
