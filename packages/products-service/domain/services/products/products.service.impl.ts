import { ProductModel } from '@app/products-service/domain/models/product.model';
import { ProductsService } from '@app/products-service/domain/services/products/products.service';
import { ProductsRepository } from '@app/products-service/infrastructure/repositories/products/products.repository';

export class ProductsServiceImpl implements ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  getById(id: string): Promise<ProductModel> {
    return this.productsRepository.get({
      id
    });
  }

  getAll(): Promise<ProductModel[]> {
    return this.productsRepository.getAll();
  }
}
