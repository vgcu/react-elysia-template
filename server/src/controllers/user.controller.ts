import { Elysia, t } from 'elysia';

// Sample user data
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: '2024-01-15T10:30:00Z' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: '2024-01-16T14:20:00Z' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', createdAt: '2024-01-17T09:15:00Z' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', createdAt: '2024-01-18T16:45:00Z' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', createdAt: '2024-01-19T11:30:00Z' }
];

let nextId = 6;

export const UserController = new Elysia()
    .group('/users', (app) => app
        // Get all users
        .get('/', () => ({
            users,
            total: users.length,
            message: 'Users retrieved successfully'
        }))
        // Get user by ID
        .get('/:id', ({ params: { id }, error }) => {
            const userId = parseInt(id);
            const user = users.find(u => u.id === userId);
            
            if (!user) {
                return error(404, {
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            }
            
            return {
                user,
                message: 'User retrieved successfully'
            };
        }, {
            params: t.Object({
                id: t.String()
            })
        })

        // Create new user
        .post('/', ({ body, error }) => {
            const { name, email } = body;
            
            // Check if email already exists
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                return error(400, {
                    error: 'Email already exists',
                    message: `User with email ${email} already exists`
                });
            }
            
            const newUser = {
                id: nextId++,
                name,
                email,
                createdAt: new Date().toISOString()
            };
            
            users.push(newUser);
            
            return {
                user: newUser,
                message: 'User created successfully'
            };
        }, {
            body: t.Object({
                name: t.String({ minLength: 1 }),
                email: t.String({ format: 'email' })
            })
        })
        
        // Update user
        .put('/:id', ({ params: { id }, body, error }) => {
            const userId = parseInt(id);
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return error(404, {
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            }
            
            const { name, email } = body;
            
            // Check if email already exists (excluding current user)
            const existingUser = users.find(u => u.email === email && u.id !== userId);
            if (existingUser) {
                return error(400, {
                    error: 'Email already exists',
                    message: `User with email ${email} already exists`
                });
            }
            
            users[userIndex] = {
                ...users[userIndex],
                name,
                email
            };
            
            return {
                user: users[userIndex],
                message: 'User updated successfully'
            };
        }, {
            params: t.Object({
                id: t.String()
            }),
            body: t.Object({
                name: t.String({ minLength: 1 }),
                email: t.String({ format: 'email' })
            })
        })
        
        // Delete user
        .delete('/:id', ({ params: { id }, error }) => {
            const userId = parseInt(id);
            const userIndex = users.findIndex(u => u.id === userId);
            
            if (userIndex === -1) {
                return error(404, {
                    error: 'User not found',
                    message: `User with ID ${userId} does not exist`
                });
            }
            
            const deletedUser = users.splice(userIndex, 1)[0];
            
            return {
                user: deletedUser,
                message: 'User deleted successfully'
            };
        }, {
            params: t.Object({
                id: t.String()
            })
        })
    );