import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

export interface HeaderProps {
  title: ReactNode;
  children: ReactNode;
}

export const Header = memo(({ title, children }: HeaderProps) => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Title variant="h6">{title}</Title>
        {children}
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = 'Header';

const Title = styled(Typography)`
  flex-grow: 1;
`;
