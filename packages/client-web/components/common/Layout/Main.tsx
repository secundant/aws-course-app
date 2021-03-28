import { Typography } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import { Copyright } from '@app/client-web/components/common/Layout/Copyright';
import { HeaderCart } from '@app/client-web/components/common/Layout/Header/Cart';
import { HeaderProfile } from '@app/client-web/components/common/Layout/Header/Profile';
import { PageLink } from '@app/client-web/components/common/Page/Link';
import { Layout } from '@app/uikit-web/Layout';
import { Footer } from '@app/uikit-web/Layout/Footer';
import { Header } from '@app/uikit-web/Layout/Header';

export interface MainLayoutProps {
  children: NonNullable<ReactNode>;
}

export const MainLayout = memo(({ children }: MainLayoutProps) => (
  <Layout
    header={
      <Header title={<PageLink href="/">My Store!</PageLink>}>
        <HeaderProfile />
        <HeaderCart />
      </Header>
    }
    footer={
      <Footer>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for your purchase!
        </Typography>
        <Copyright />
      </Footer>
    }
  >
    {children}
  </Layout>
));

MainLayout.displayName = 'MainLayout';
