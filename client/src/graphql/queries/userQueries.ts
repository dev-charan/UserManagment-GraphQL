export const GET_USERS = `
  query GetUsers {
    users {
      id
      name
      email
      age
      createdAt
    }
  }
`;

export const GET_USER = `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      age
      createdAt
      updatedAt
    }
  }
`;
