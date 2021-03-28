import { Product } from '@app/client-web/domain';
import { ProductsPageFacade } from '@app/client-web/domain/facades/products-page/products-page.facade';
import { ProductsRepository } from '@app/client-web/infrastructure/repositories/products/products.repository';

export class ProductsPageFacadeImpl implements ProductsPageFacade {
  constructor(private productsRepository: ProductsRepository) {}

  getAll(): Promise<Product[]> {
    return this.productsRepository.getAll();
  }
}
