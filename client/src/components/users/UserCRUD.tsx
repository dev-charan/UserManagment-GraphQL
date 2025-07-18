import React, { useState } from 'react';
import { User as UserIcon } from 'lucide-react';
import type { User, FormData } from '../../types/user';
import { useUsers } from '../../hooks/useUsers';
import UserForm from './UserForm';
import UserList from './UserList';

const UserCRUD: React.FC = () => {
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formError, setFormError] = useState<string>('');
  
  const {
    users,
    loading,
    error,
    createUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const handleSubmit = async (formData: FormData): Promise<void> => {
    try {
      setFormError('');
      
      const userData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        age: parseInt(formData.age),
      };

      if (editingUser) {
        await updateUser(editingUser.id, userData);
        setEditingUser(null);
      } else {
        await createUser(userData);
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    }
  };

  const handleEdit = (user: User): void => {
    setEditingUser(user);
    setFormError('');
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteUser(id);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Failed to delete user');
    }
  };

  const handleCancel = (): void => {
    setEditingUser(null);
    setFormError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">User Management</h1>
          <p className="text-gray-600">MERN Stack GraphQL CRUD Application</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {formError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {formError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <UserForm
              onSubmit={handleSubmit}
              onCancel={editingUser ? handleCancel : undefined}
              initialData={editingUser ? {
                name: editingUser.name,
                email: editingUser.email,
                age: editingUser.age.toString(),
              } : undefined}
              isEditing={!!editingUser}
            />
          </div>

          {/* Users List Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <UserIcon className="mr-2" size={24} />
              <h2 className="text-2xl font-semibold text-gray-800">
                Users ({users.length})
              </h2>
            </div>
            
            <UserList
              users={users}
              onEdit={handleEdit}
              onDelete={handleDelete}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCRUD;
