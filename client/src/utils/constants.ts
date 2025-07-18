export const API_URL = 'http://localhost:4000/graphql';

export const VALIDATION_MESSAGES = {
  REQUIRED_FIELDS: 'Please fill in all fields',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_AGE: 'Age must be a positive number',
  DELETE_CONFIRMATION: 'Are you sure you want to delete this user?',
} as const;
