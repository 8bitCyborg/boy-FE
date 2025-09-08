import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = '', config?: AxiosRequestConfig, headers?: Record<string, string>) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
      headers: { ...headers },
      ...config,
    });
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get(url, config);
    return response.data;
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post(url, data, config);
    return response.data;
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put(url, data, config);
    return response.data;
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.patch(url, data, config);
    return response.data;
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete(url, config);
    return response.data;
  }
}

export const apiClient = new ApiClient();
export const { get, post, put, patch, delete: del } = apiClient;
