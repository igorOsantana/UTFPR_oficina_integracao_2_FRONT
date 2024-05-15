import { AxiosError } from 'axios';
import { AuthService } from './services/auth-service';
import { redirect } from 'next/navigation';
import { ProductsService } from './services/products-service';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const authService = new AuthService();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    await authService.login(email!.toString(), password!.toString());
    redirect('/dashboard');
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return 'Invalid credentials.';
    }
    throw error;
  }
}

export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  const authService = new AuthService();
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    await authService.register(
      name!.toString(),
      email!.toString(),
      password!.toString(),
    );
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.message) {
      return error.response.data.message;
    }
    return 'Failed to register';
  }
  alert('Account created successfully. Redirecting...');
  redirect('/authentication/login?first_login=1');
}

export async function createProduct(
  prevState: string | undefined,
  formData: FormData,
) {
  const productsService = new ProductsService();
  const name = formData.get('name');
  const quantity = formData.get('quantity');
  const { errorMsg } = await productsService.create(
    name!.toString(),
    Number(quantity!.toString()),
  );
  if (errorMsg !== null) {
    return errorMsg;
  }
  alert('Product created successfully!');
  redirect('/dashboard/products?' + Date.now());
}
