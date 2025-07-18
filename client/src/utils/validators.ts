import type { FormData } from '../types/user.ts';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateAge = (age: string): boolean => {
  const ageNum = parseInt(age);
  return !isNaN(ageNum) && ageNum > 0 && ageNum < 150;
};

export const validateFormData = (formData: FormData): string[] => {
  const errors: string[] = [];
  
  if (!formData.name.trim()) errors.push('Name is required');
  if (!formData.email.trim()) errors.push('Email is required');
  if (!formData.age.trim()) errors.push('Age is required');
  
  if (formData.email && !validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (formData.age && !validateAge(formData.age)) {
    errors.push('Age must be a positive number');
  }
  
  return errors;
};
