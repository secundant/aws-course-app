import { Product } from '@app/client-web/domain';
import { HttpClient } from '@app/client-web/infrastructure';
import { ProductsRepository } from '@app/client-web/infrastructure/repositories/products/products.repository';

export class ProductsRepositoryImpl implements ProductsRepository {
  constructor(private http: HttpClient) {}

  getAll(): Promise<Product[]> {
    return this.http.get<any>('/products').then(response => response.data.data);
  }
}
