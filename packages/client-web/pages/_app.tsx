import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import { PageMetadataProvider } from '@app/client-web/contexts/common/page-metadata.provider';

export default function App({ Component, pageProps }: AppProps<any>): ReactElement {
  return (
    <PageMetadataProvider PageComponent={Component}>
      <Component {...pageProps} />
    </PageMetadataProvider>
  );
}
