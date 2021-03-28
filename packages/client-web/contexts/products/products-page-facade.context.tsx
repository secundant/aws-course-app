import React from 'react';
import { ProductsPageFacade } from '@app/client-web/domain/facades/products-page/products-page.facade';

export const ProductsPageFacadeContext = React.createContext<ProductsPageFacade | null>(null);

ProductsPageFacadeContext.displayName = 'ProductsPageFacadeContext';
