import { ProductModel } from '@app/products-service/domain/models/product.model';

export interface ProductsService {
  getAll(): Promise<ProductModel[]>;
  getById(id: ProductModel['id']): Promise<ProductModel>;
}
