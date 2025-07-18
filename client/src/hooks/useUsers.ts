import { useState, useEffect } from 'react';
import type { User, CreateUserInput, UpdateUserInput } from '../types/user';
import { graphqlRequest } from '../graphql/client';
import { GET_USERS } from '../graphql/queries/userQueries';
import { CREATE_USER, UPDATE_USER, DELETE_USER } from '../graphql/mutations/userMutations';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      const data = await graphqlRequest<{ users: User[] }>(GET_USERS);
      setUsers(data.users);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData: CreateUserInput): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      await graphqlRequest<{ createUser: User }>(CREATE_USER, userData);
      await fetchUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: string, userData: Partial<UpdateUserInput>): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      await graphqlRequest<{ updateUser: User }>(UPDATE_USER, { id, ...userData });
      await fetchUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      await graphqlRequest<{ deleteUser: boolean }>(DELETE_USER, { id });
      await fetchUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
    refetch: fetchUsers,
  };
};
