import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React, { memo } from 'react';
import styled from 'styled-components';

export const ProductsListSkeleton = memo(() => (
  <Grid container spacing={4}>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <ProductCardSkeleton />
    </Grid>
  </Grid>
));

export const ProductCardSkeleton = memo(() => (
  <StyledCard>
    <MediaSkeleton animation="wave" variant="rect" />
    <StyledCardContent>
      <Typography gutterBottom variant="h5" component="h2">
        <Skeleton animation="wave" width="70%" />
      </Typography>
      <Typography>
        <Skeleton animation="wave" width="40%" />
      </Typography>
    </StyledCardContent>
    <CardActions>
      <IconButton disabled>
        <ShoppingCart color="inherit" />
      </IconButton>
    </CardActions>
  </StyledCard>
));

ProductsListSkeleton.displayName = 'ProductsListSkeleton';
ProductCardSkeleton.displayName = 'ProductCardSkeleton';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MediaSkeleton = styled(Skeleton)`
  padding-top: ${900 / 16}%;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;
