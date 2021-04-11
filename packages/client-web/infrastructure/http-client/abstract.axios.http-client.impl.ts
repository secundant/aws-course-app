import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  HttpClient,
  HttpConfig,
  HttpMethod,
  HttpResponse
} from '@app/client-web/infrastructure/http-client/http-client';

export abstract class AbstractAxiosHttpClientImpl implements HttpClient {
  protected instance: AxiosInstance;

  request<Data = unknown, Response = HttpResponse<Data>>(config: HttpConfig): Promise<Response> {
    return this.instance.request(config);
  }

  get<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    config?: HttpConfig
  ): Promise<Response> {
    return this.instance.get(url, config);
  }

  put<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response> {
    return this.instance.put(url, data, config);
  }

  post<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response> {
    return this.instance.post(url, data, config);
  }

  patch<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response> {
    return this.instance.patch(url, data, config);
  }

  delete<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    config?: HttpConfig
  ): Promise<Response> {
    return this.instance.delete(url, config);
  }

  protected abstract createConfiguration(): HttpConfig;
  protected beforeBootstrap?(instance: AxiosInstance): void;

  protected bootstrap(): void {
    this.instance = Axios.create(
      AbstractAxiosHttpClientImpl.httpConfigToAxiosConfig(this.createConfiguration())
    );

    if (this.beforeBootstrap) {
      this.beforeBootstrap(this.instance);
    }
  }

  static httpConfigToAxiosConfig(config: HttpConfig): AxiosRequestConfig {
    return {
      ...config
    };
  }

  static axiosConfigToHttpConfig({ method = 'GET', ...config }: AxiosRequestConfig): HttpConfig {
    return {
      method: method as HttpMethod,
      ...config
    };
  }
}
