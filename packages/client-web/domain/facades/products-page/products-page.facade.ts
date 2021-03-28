import { Product } from '@app/client-web/domain';

export interface ProductsPageFacade {
  getAll(): Promise<Product[]>;
}
