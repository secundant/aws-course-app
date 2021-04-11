import { APIGatewayProxyHandler } from 'aws-lambda';
import { CORS_HEADERS } from '@app/products-service/constants';
import { ProductsServiceImpl } from '@app/products-service/domain/services/products/products.service.impl';
import { MockedProductsRepositoryImpl } from '@app/products-service/infrastructure/repositories/products/mocked.products.repository.impl';

export const getProducts: APIGatewayProxyHandler = async () => {
  const productsService = new ProductsServiceImpl(new MockedProductsRepositoryImpl());
  const products = await productsService.getAll();

  return {
    headers: CORS_HEADERS,
    statusCode: 200,
    body: JSON.stringify({
      data: products
    })
  };
};
