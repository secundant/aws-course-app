import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

export interface ProductCardProps {
  image: {
    src: string;
    alt: string;
  };
  label: ReactNode;
  description: ReactNode;
  actions: ReactNode;
}

export const ProductCard = memo(({ image, label, actions, description }: ProductCardProps) => (
  <StyledCard>
    <StyledCardMedia image={image.src} title={image.alt} />
    <StyledCardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {label}
      </Typography>
      <Typography>{description}</Typography>
    </StyledCardContent>
    <CardActions>{actions}</CardActions>
  </StyledCard>
));

ProductCard.displayName = 'ProductCard';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: ${900 / 16}%;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;
