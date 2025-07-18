# MERN Stack GraphQL CRUD Project Setup (TypeScript)

This is a complete MERN stack application with GraphQL and TypeScript for performing CRUD operations on users.

## Project Structure

```
mern-graphql-project/
├── backend/
│   ├── server.js
│   ├── schema.js
│   ├── models/
│   │   └── User.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.tsx
    │   ├── index.tsx
    │   └── types/
    │       └── index.ts
    ├── tsconfig.json
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

## Backend Setup

1. Create a new directory for your project:
```bash
mkdir mern-graphql-project
cd mern-graphql-project
```

2. Create the backend directory and files:
```bash
mkdir backend
cd backend
```

3. Initialize npm and install dependencies:
```bash
npm init -y
npm install apollo-server-express cors express graphql mongoose
npm install -D nodemon
```

4. Create the following files with the provided code:
   - `server.js` (main server file)
   - `schema.js` (GraphQL schema and resolvers)
   - `models/User.js` (Mongoose user model)

5. Update your `package.json` with the provided scripts.

6. Start MongoDB (make sure it's running on `mongodb://localhost:27017`)

7. Run the backend server:
```bash
npm run dev
```

The GraphQL playground will be available at `http://localhost:4000/graphql`

## Frontend Setup (TypeScript)

1. From the project root, create a React TypeScript app:
```bash
npx create-react-app frontend --template typescript
cd frontend
```

2. Install the TypeScript React app dependencies (they should already be installed):
```bash
npm install
```

3. Replace the contents of `src/App.tsx` with the provided React component code.

4. Create a `src/types/index.ts` file with the provided type definitions.

5. Update `tsconfig.json` with the provided configuration.

6. Update `package.json` with the provided dependencies.

7. Start the frontend development server:
```bash
npm start
```

The React app will be available at `http://localhost:3000`

## TypeScript Features Added

### Type Safety
- **User Interface** - Strongly typed user objects
- **Form Data** - Typed form state management
- **GraphQL Responses** - Typed API responses
- **Function Parameters** - All function parameters are typed
- **Event Handlers** - Typed event handling

### Enhanced Development Experience
- **IntelliSense** - Better autocomplete and error detection
- **Compile-time Errors** - Catch errors before runtime
- **Refactoring Support** - Safer code refactoring
- **Documentation** - Self-documenting code with interfaces

### Key TypeScript Additions
```typescript
// User type definition
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  createdAt: string;
  updatedAt?: string;
}

// Form data type
interface FormData {
  name: string;
  email: string;
  age: string;
}

// GraphQL response type
interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}
```

## Features

### Backend Features
- GraphQL API with Apollo Server
- MongoDB integration with Mongoose
- User model with validation
- CRUD operations (Create, Read, Update, Delete)
- Error handling
- CORS enabled for frontend communication

### Frontend Features (TypeScript)
- **Type-safe React components** with TypeScript
- **Strongly typed state management** with hooks
- **Typed API calls** with proper error handling
- Responsive design with Tailwind CSS
- Real-time CRUD operations
- Form validation with type safety
- Loading states and error handling
- User-friendly interface with icons

## Development Benefits

### Type Safety
- Prevents runtime errors
- Better IDE support
- Easier debugging
- Self-documenting code

### Developer Experience
- Autocomplete for all API calls
- Compile-time error checking
- Better refactoring support
- Improved code maintainability

## Scripts

### Backend
```bash
npm run dev    # Development with nodemon
npm start      # Production
```

### Frontend
```bash
npm start      # Development server
npm run build  # Production build
npm test       # Run tests
```

## GraphQL Operations

### Queries
```graphql
# Get all users
query {
  users {
    id
    name
    email
    age
    createdAt
  }
}

# Get single user
query {
  user(id: "USER_ID") {
    id
    name
    email
    age
  }
}
```

### Mutations
```graphql
# Create user
mutation {
  createUser(name: "John Doe", email: "john@example.com", age: 30) {
    id
    name
    email
    age
  }
}

# Update user
mutation {
  updateUser(id: "USER_ID", name: "Jane Doe", age: 25) {
    id
    name
    email
    age
  }
}

# Delete user
mutation {
  deleteUser(id: "USER_ID")
}
```

## Testing

1. Open the GraphQL playground at `http://localhost:4000/graphql`
2. Try running the sample queries and mutations
3. Use the React frontend to interact with the API visually
4. TypeScript will catch type errors during development

## Environment Variables (Optional)

Create a `.env` file in the backend directory:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/mern-graphql
NODE_ENV=development
```

Update `server.js` to use environment variables:
```javascript
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-graphql';
```

## TypeScript Configuration

The project includes:
- **tsconfig.json** - TypeScript compiler configuration
- **Type definitions** - Comprehensive interfaces for all data structures
- **Strict type checking** - Enabled for better code quality
- **Modern ES features** - Support for latest JavaScript features

## Next Steps

- Add user authentication with JWT (typed)
- Implement pagination for large datasets
- Add input validation and sanitization
- Set up production deployment
- Add unit and integration tests with Jest
- Implement real-time updates with GraphQL subscriptions
- Add more comprehensive error types
- Implement form validation with libraries like Yup or Joi

## Troubleshooting

- **MongoDB connection error**: Make sure MongoDB is running
- **CORS errors**: Ensure the backend CORS middleware is properly configured
- **GraphQL errors**: Check the GraphQL playground for detailed error messages
- **Port conflicts**: Make sure ports 3000 and 4000 are available
- **TypeScript errors**: Check the TypeScript compiler output for type errors
- **Build errors**: Ensure all dependencies are installed and tsconfig.json is properly configured

This TypeScript version provides enhanced type safety, better developer experience, and improved code maintainability while maintaining all the original functionality!
