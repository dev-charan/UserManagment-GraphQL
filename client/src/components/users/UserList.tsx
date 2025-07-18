import React from 'react';
import { User as UserIcon } from 'lucide-react';
import type { User } from '../../types/user';
import UserCard from './UserCard';
import LoadingSpinner from '../common/LoadingSpinner';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
  loading?: boolean;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onEdit,
  onDelete,
  loading = false,
}) => {
  if (loading && users.length === 0) {
    return (
      <div className="text-center py-8">
        <LoadingSpinner size="lg" className="mx-auto" />
        <p className="text-gray-500 mt-4">Loading users...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <UserIcon className="mx-auto text-gray-400 mb-4" size={48} />
        <p className="text-gray-500">No users found. Add your first user!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UserList;
