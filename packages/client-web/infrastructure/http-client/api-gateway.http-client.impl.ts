import { AbstractAxiosHttpClientImpl } from '@app/client-web/infrastructure/http-client/abstract.axios.http-client.impl';
import { HttpConfig } from '@app/client-web/infrastructure/http-client/http-client';

export class ApiGatewayHttpClientImpl extends AbstractAxiosHttpClientImpl {
  constructor() {
    super();
    this.bootstrap();
  }

  protected createConfiguration(): HttpConfig {
    return {
      baseURL: process.env.NEXT_PUBLIC_SERVICE_PRODUCTS_URI
    };
  }
}
