export interface HttpClient {
  request<Data = unknown, Response = HttpResponse<Data>>(config: HttpConfig): Promise<Response>;

  get<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    config?: HttpConfig
  ): Promise<Response>;

  put<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response>;

  post<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response>;

  patch<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    data?: unknown,
    config?: HttpConfig
  ): Promise<Response>;

  delete<Data = unknown, Response = HttpResponse<Data>>(
    url: string,
    config?: HttpConfig
  ): Promise<Response>;
}

export interface HttpResponse<Data> {
  data: Data;
  config: HttpConfig;
  status: number;
  statusText: string;
  headers: { [key: string]: string };
}

export interface HttpError<Data = any> extends Error {
  config: HttpConfig;
  response?: HttpResponse<Data>;
}

export type HttpMethod = 'GET' | 'DELETE' | 'HEAD' | 'POST' | 'PUT' | 'PATCH';

export interface HttpConfig {
  url?: string;
  data?: unknown;
  params?: unknown;
  method?: HttpMethod;
  baseURL?: string;
  headers?: any;
  withCredentials?: boolean;
  onUploadProgress?: (progressEvent: ProgressEvent) => void;
  onDownloadProgress?: (progressEvent: ProgressEvent) => void;
}
