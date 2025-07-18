import React, { useEffect } from 'react';
import { Plus } from 'lucide-react';
import type { FormData, User } from '../../types/user';
import { useForm } from '../../hooks/useForm';
import Input from '../common/Input';
import Button from '../common/Button';

interface UserFormProps {
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel?: () => void;
  initialData?: FormData;
  isEditing?: boolean;
}

const UserForm: React.FC<UserFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false,
}) => {
  const { formData, errors, handleInputChange, validateForm, resetForm, setInitialData } = useForm(initialData);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (initialData) {
      setInitialData(initialData);
    }
  }, [initialData, setInitialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      await onSubmit(formData);
      if (!isEditing) {
        resetForm();
      }
    } catch (err) {
      // Error handling is done in the parent component
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    resetForm();
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center mb-6">
        <Plus className="mr-2" size={24} />
        <h2 className="text-2xl font-semibold text-gray-800">
          {isEditing ? 'Edit User' : 'Add New User'}
        </h2>
      </div>

      {errors.length > 0 && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <ul className="list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <Input
        label="Name"
        value={formData.name}
        onChange={(value) => handleInputChange('name', value)}
        required
        placeholder="Enter user name"
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => handleInputChange('email', value)}
        required
        placeholder="Enter email address"
      />

      <Input
        label="Age"
        type="number"
        value={formData.age}
        onChange={(value) => handleInputChange('age', value)}
        required
        min="0"
        placeholder="Enter age"
      />

      <div className="flex gap-3">
        <Button
          type="submit"
          loading={loading}
          className="flex-1"
        >
          {isEditing ? 'Update User' : 'Add User'}
        </Button>
        
        {isEditing && (
          <Button
            type="button"
            variant="secondary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
