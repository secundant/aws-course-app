import React, { ReactElement, useMemo } from 'react';
import { withDefaultPage } from '@app/client-web/application/pages/with-default-page.decorator';
import { MainLayout } from '@app/client-web/components/common/Layout/Main';
import { PageHead } from '@app/client-web/components/common/Page/Head';
import { Products } from '@app/client-web/components/Products';
import { ProductsPageFacadeContext } from '@app/client-web/contexts/products/products-page-facade.context';
import { ProductsPageFacadeImpl } from '@app/client-web/domain/facades/products-page/products-page.facade.impl';
import { ProductsRepositoryImpl } from '@app/client-web/infrastructure/repositories/products/products.repository.impl';

export default withDefaultPage(function IndexPage(): ReactElement {
  const productsPageFacade = useMemo(
    () => new ProductsPageFacadeImpl(new ProductsRepositoryImpl()),
    []
  );

  return (
    <ProductsPageFacadeContext.Provider value={productsPageFacade}>
      <MainLayout>
        <PageHead title="My store" description="List of products" />
        <Products />
      </MainLayout>
    </ProductsPageFacadeContext.Provider>
  );
});
