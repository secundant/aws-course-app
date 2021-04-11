import { APIGatewayProxyHandler } from 'aws-lambda';
import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { GetProductByIdParamsDto } from '@app/products-service/application/dto/get-product-by-id-params.dto';
import { CORS_HEADERS } from '@app/products-service/constants';
import { ProductsServiceImpl } from '@app/products-service/domain/services/products/products.service.impl';
import { MockedProductsRepositoryImpl } from '@app/products-service/infrastructure/repositories/products/mocked.products.repository.impl';

export const getProductById: APIGatewayProxyHandler = async event => {
  try {
    const productsService = new ProductsServiceImpl(new MockedProductsRepositoryImpl());
    const params = plainToClass(GetProductByIdParamsDto, event.pathParameters);

    await validateOrReject(params);
    const product = await productsService.getById(params.productId);

    return {
      headers: CORS_HEADERS,
      statusCode: 200,
      body: JSON.stringify({
        data: product
      })
    };
  } catch (error) {
    return {
      headers: CORS_HEADERS,
      statusCode: 500,
      body: JSON.stringify({
        error: {
          name: error.name,
          message: error.message,
          details: error.details ?? null,
          stack: error.stack.toString()
        }
      })
    };
  }
};
