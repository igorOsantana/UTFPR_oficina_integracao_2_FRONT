import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { redirect } from 'next/navigation';

export class HttpService {
  private static instance: HttpService;
  private http: AxiosInstance;

  private constructor() {
    this.http = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 30000,
      timeoutErrorMessage: 'This is taking too long... Timeout!',
    });
  }

  static getInstance(): HttpService {
    if (!this.instance) {
      this.instance = new HttpService();
    }
    return this.instance;
  }

  getAccessToken() {
    return window.localStorage.getItem('at');
  }

  execute(config: AxiosRequestConfig) {
    return this.http.request(config);
  }

  handleError(error: unknown) {
    if (error instanceof AxiosError) {
      return this.handleAxiosError(error);
    }
    if (error instanceof Error) {
      return error.message;
    }
    throw error;
  }

  private handleAxiosError(error: AxiosError) {
    switch (error.response?.status) {
      case 401:
        alert('Your session has finished, please log in again');
        redirect('/authentication/login');
      case 404:
        return this.getApiErrorMsg(error) || 'Resource not found';
      case 409:
        return (
          this.getApiErrorMsg(error) ||
          "Conflict with the resource's current state"
        );
      default:
        return 'Something went wrong';
    }
  }

  private getApiErrorMsg(error: AxiosError) {
    if (
      typeof error.response?.data === 'object' &&
      error.response.data !== null &&
      'message' in error.response?.data &&
      typeof error.response?.data.message === 'string'
    ) {
      return error.response.data.message;
    }
  }
}
