import React, { ComponentType, memo, ReactNode, useMemo } from 'react';
import {
  getPageMetadata,
  PageMetadataEntry
} from '@app/client-web/application/pages/common/page-decorator';

export interface PageMetadataProviderProps {
  PageComponent: ComponentType;
  children: NonNullable<ReactNode>;
}

export const PageMetadataProvider = memo(
  ({ children, PageComponent }: PageMetadataProviderProps) => {
    const metadata = useMemo(() => getPageMetadata(PageComponent), [PageComponent]);

    console.log('METADATA::', metadata);
    const decoratedChildren = useMemo(
      () => metadata.entries.reduceRight(metadataReducer, children),
      [metadata, children]
    );

    return <>{decoratedChildren}</>;
  }
);

PageMetadataProvider.displayName = 'PageMetadataProvider';

const metadataReducer = (
  children: NonNullable<ReactNode>,
  { Provider }: PageMetadataEntry
): NonNullable<ReactNode> => {
  if (Provider) {
    return <Provider>{children}</Provider>;
  }
  return children;
};
