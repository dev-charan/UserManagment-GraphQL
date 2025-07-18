export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

export interface GraphQLError {
  message: string;
  locations?: Array<{
    line: number;
    column: number;
  }>;
  path?: Array<string | number>;
}
