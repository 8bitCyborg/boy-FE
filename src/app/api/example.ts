// Example usage of the simplified API class
import { ApiClient, apiClient } from './api';

// Example 1: Basic usage
export const basicUsage = {
  async fetchUsers() {
    const users = await apiClient.get('/users');
    return users;
  },

  async createUser(userData: { name: string; email: string }) {
    const newUser = await apiClient.post('/users', userData);
    return newUser;
  },

  async updateUser(userId: string, userData: { name?: string; email?: string }) {
    const updatedUser = await apiClient.put(`/users/${userId}`, userData);
    return updatedUser;
  },

  async deleteUser(userId: string) {
    await apiClient.delete(`/users/${userId}`);
  }
};

// Example 2: Custom API client
export const customApi = new ApiClient('https://api.example.com', {
  timeout: 15000,
  headers: { 'X-API-Key': 'your-api-key' }
});

// Example 3: With TypeScript
interface User {
  id: string;
  name: string;
  email: string;
}

export const typedUsage = {
  async fetchUser(userId: string): Promise<User> {
    return await apiClient.get<User>(`/users/${userId}`);
  },

  async createUser(userData: { name: string; email: string }): Promise<User> {
    return await apiClient.post<User>('/users', userData);
  }
};
