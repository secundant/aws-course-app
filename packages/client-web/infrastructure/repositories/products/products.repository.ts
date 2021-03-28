import { Product } from '@app/client-web/domain';

export interface ProductsRepository {
  getAll(): Promise<Product[]>;
}
