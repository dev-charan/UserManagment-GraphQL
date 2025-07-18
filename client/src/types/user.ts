export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
  updatedAt?: string;
}

export interface FormData {
  name: string;
  email: string;
  age: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserInput {
  id: string;
  name?: string;
  email?: string;
  age?: number;
}
