import { HttpService } from './http-service';

export class AuthService {
  private httpService: HttpService;

  constructor() {
    this.httpService = HttpService.getInstance();
  }

  async login(email: string, password: string) {
    const response = await this.httpService.execute({
      method: 'POST',
      url: '/auth/login',
      data: { email, password },
    });
    if (window !== undefined) {
      window.localStorage.setItem('at', response.data.accessToken);
    } else {
      throw new Error('window not available!');
    }
  }

  logout() {
    if (window !== undefined) {
      window.localStorage.removeItem('at');
    } else {
      throw new Error('window not available!');
    }
  }

  async register(name: string, email: string, password: string) {
    await this.httpService.execute({
      method: 'POST',
      url: '/users',
      data: { name, email, password },
    });
  }
}
