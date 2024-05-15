import { Product } from '../entities';
import { HttpService } from './http-service';

export class ProductsService {
  private httpService: HttpService;

  constructor() {
    this.httpService = HttpService.getInstance();
  }

  async create(name: string, quantity: number) {
    try {
      const response = await this.httpService.execute({
        method: 'POST',
        url: '/products',
        data: { name, quantity },
        headers: {
          Authorization: `Bearer ${this.httpService.getAccessToken()}`,
        },
      });
      return { data: response.data as Product, errorMsg: null };
    } catch (error) {
      return { data: null, errorMsg: this.httpService.handleError(error) };
    }
  }

  async delete(id: string) {
    try {
      await this.httpService.execute({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          Authorization: `Bearer ${this.httpService.getAccessToken()}`,
        },
      });
      return { errorMsg: null };
    } catch (error) {
      return { errorMsg: this.httpService.handleError(error) };
    }
  }

  async getAll(search?: string) {
    try {
      const response = await this.httpService.execute({
        method: 'GET',
        url: '/products',
        params: { name: search },
        headers: {
          Authorization: `Bearer ${this.httpService.getAccessToken()}`,
        },
      });
      return { products: response.data as Product[], errorMsg: null };
    } catch (error) {
      return { products: [], errorMsg: this.httpService.handleError(error) };
    }
  }
}
