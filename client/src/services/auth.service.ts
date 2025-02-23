import { removeAccessToken, saveAccessToken } from './auth-token.service';
import { IAuthForm, IAuthResponse } from '@/types/auth.types';
import { axiosClassic } from '@/api/interceptors';

class AuthService {
  async main(type: 'login' | 'register', data: IAuthForm) {
    try {
      const response = await axiosClassic.post<IAuthResponse>(
        `/auth/${type}`,
        data,
      );

      if (response.data.accessToken) saveAccessToken(response.data.accessToken);

      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw error.response.data.message;
    }
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      'auth/login/access-token',
    );

    if (response.data.accessToken) saveAccessToken(response.data.accessToken);

    return response;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>('/auth/logout');

    if (response.data) removeAccessToken();

    return response;
  }
}

export const authService = new AuthService();
