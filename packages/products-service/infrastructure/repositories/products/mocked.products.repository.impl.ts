import { products } from './products.json';
import { ProductModel } from '@app/products-service/domain/models/product.model';
import { ProductsRepository } from '@app/products-service/infrastructure/repositories/products/products.repository';

export class MockedProductsRepositoryImpl implements ProductsRepository {
  private products = new Map(products.map(product => [product.id, product]));

  async tryGet({ id }: Partial<ProductModel>): Promise<ProductModel | null> {
    if (!id) {
      throw new Error(`Only "id" condition supported`);
    }
    return this.products.get(id) ?? null;
  }

  async get(conditions: Partial<ProductModel>): Promise<ProductModel> {
    const product = await this.tryGet(conditions);

    if (!product) {
      throw new Error('TODO_NotFoundException');
    }
    return product;
  }

  async getAll(): Promise<ProductModel[]> {
    return Array.from(this.products.values());
  }
}
