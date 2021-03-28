import { Container } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import styled from 'styled-components';

export interface LayoutProps {
  header: ReactNode;
  footer: ReactNode;
  children: NonNullable<ReactNode>;
}

export const Layout = memo(({ header, footer, children }: LayoutProps) => (
  <>
    {header}
    <Main>
      <StyledContainer maxWidth="md">{children}</StyledContainer>
    </Main>
    {footer}
  </>
));

Layout.displayName = 'Layout';

const Main = styled.main``;
const StyledContainer = styled(Container)`
  padding: ${p => p.theme.mui.spacing(4)}px;
`;
