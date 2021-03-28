import { Product } from '@app/client-web/domain';
import { ProductsRepository } from '@app/client-web/infrastructure/repositories/products/products.repository';

export class ProductsRepositoryImpl implements ProductsRepository {
  getAll(): Promise<Product[]> {
    return import('./product.json').then(
      json =>
        new Promise(resolve => {
          setTimeout(() => resolve(json.default), 500 + 1500 * Math.random());
        })
    );
  }
}
