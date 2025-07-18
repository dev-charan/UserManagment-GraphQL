import { type GraphQLResponse } from '../types/api';
import { API_URL } from '../utils/constants';

export const graphqlRequest = async <T>(
  query: string, 
  variables: Record<string, any> = {}
): Promise<T> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result: GraphQLResponse<T> = await response.json();
  
  if (result.errors) {
    throw new Error(result.errors[0].message);
  }
  
  return result.data as T;
};
