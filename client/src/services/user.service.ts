import type { TypeUserForm } from '@/types/auth.types';
import { IProfileResponse } from '@/types/profile';
import { axiosWithAuth } from '@/api/interceptors';

class UserService {
  private BASE_URL = '/user/profile';

  async getProfile() {
    const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL);

    return response.data;
  }

  async updateProfile(data: TypeUserForm) {
    const response = await axiosWithAuth.put<IProfileResponse>(
      this.BASE_URL,
      data,
    );
    return response.data;
  }
}

export const userService = new UserService();
