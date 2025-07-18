import React from 'react';
import { Edit, Trash2, Mail, User as UserIcon, Calendar } from 'lucide-react';
import type { User } from '../../types/user';
import Button from '../common/Button';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      onDelete(user.id);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-gray-800">{user.name}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(user)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="Edit user"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 p-1"
            title="Delete user"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center">
          <Mail size={14} className="mr-2" />
          {user.email}
        </div>
        <div className="flex items-center">
          <UserIcon size={14} className="mr-2" />
          Age: {user.age}
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-2" />
          Created: {new Date(user.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
