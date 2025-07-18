import { useState } from 'react';
import type { FormData } from '../types/user';
import { validateFormData } from '../utils/validators';

export const useForm = (initialData?: FormData) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || { name: '', email: '', age: '' }
  );
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = (): boolean => {
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const resetForm = (): void => {
    setFormData({ name: '', email: '', age: '' });
    setErrors([]);
  };

  const setInitialData = (data: FormData): void => {
    setFormData(data);
    setErrors([]);
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    resetForm,
    setInitialData,
  };
};
