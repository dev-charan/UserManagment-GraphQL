export const CREATE_USER = `
  mutation CreateUser($name: String!, $email: String!, $age: Int!) {
    createUser(name: $name, email: $email, age: $age) {
      id
      name
      email
      age
      createdAt
    }
  }
`;

export const UPDATE_USER = `
  mutation UpdateUser($id: ID!, $name: String, $email: String, $age: Int) {
    updateUser(id: $id, name: $name, email: $email, age: $age) {
      id
      name
      email
      age
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_USER = `
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
