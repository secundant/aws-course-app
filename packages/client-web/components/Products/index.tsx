import React, { memo, useCallback } from 'react';
import useSWR from 'swr';
import { ProductsList } from '@app/client-web/components/Products/List';
import { ProductsPageFacadeContext } from '@app/client-web/contexts/products/products-page-facade.context';
import { useRequiredContext } from '@app/client-web/hooks/common/useRequiredContext';
import { ProductsListSkeleton } from '@app/uikit-web/ProductCard/skeletons';

export const Products = memo(() => {
  const productsPageFacade = useRequiredContext(ProductsPageFacadeContext);
  const fetcher = useCallback(() => productsPageFacade.getAll(), [productsPageFacade]);

  const { data, isValidating } = useSWR('products', fetcher);

  if (isValidating) return <ProductsListSkeleton />;
  if (!data) {
    console.error('NO DATA');
    return null;
  }
  return <ProductsList products={data} />;
});

Products.displayName = 'Products';
