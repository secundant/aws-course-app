import { Grid } from '@material-ui/core';
import React, { memo, useCallback, useMemo } from 'react';
import { AddToCart } from '@app/client-web/components/Products/AddToCart';
import { Product } from '@app/client-web/domain';
import { formatAsPrice } from '@app/client-web/utils/formatters';
import { ProductCard } from '@app/uikit-web/ProductCard';

export interface ProductsListProps {
  products: Product[];
}

export const ProductsList = memo(({ products }: ProductsListProps) => {
  const renderProduct = useCallback(
    (product: Product, index: number) => (
      <Grid item key={product.id} xs={12} sm={6} md={4}>
        <ProductCard
          image={{
            src: `https://source.unsplash.com/random?sig=${index}`,
            alt: 'No image'
          }}
          label={product.title}
          description={formatAsPrice(product.price)}
          actions={<AddToCart product={product} />}
        />
      </Grid>
    ),
    []
  );

  const children = useMemo(() => products.map(renderProduct), [products, renderProduct]);

  return (
    <Grid container spacing={4}>
      {children}
    </Grid>
  );
});

ProductsList.displayName = 'ProductsList';
