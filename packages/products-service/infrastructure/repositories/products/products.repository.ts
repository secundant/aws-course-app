import { ProductModel } from '@app/products-service/domain/models/product.model';

export interface ProductsRepository {
  tryGet(conditions: Partial<ProductModel>): Promise<ProductModel | null>;
  get(conditions: Partial<ProductModel>): Promise<ProductModel>;
  getAll(): Promise<ProductModel[]>;
}
