import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    return {
      accessToken: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token',
      user: { id: 'user-1', email, name: 'John Doe' },
    };
  }

  async signup(email: string, password: string, name: string) {
    return {
      accessToken: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token',
      user: { id: 'user-1', email, name },
    };
  }

  async validateUser(email: string) {
    return { id: 'user-1', email, name: 'John Doe' };
  }

  async logout() {
    return { success: true };
  }

  async refresh(refreshToken: string) {
    return {
      accessToken: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token',
    };
  }
}
