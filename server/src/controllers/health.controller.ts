import { Elysia } from 'elysia';

export const HealthController = new Elysia()
    .group('/health', (app) => app
        .get('/', () => ({
            status: 'ok',
            message: 'Server is running smoothly!',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            version: '1.0.0'
        }))
        .get('/detailed', () => ({
            status: 'ok',
            message: 'Detailed health check',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            version: '1.0.0',
            environment: process.env.NODE_ENV || 'development'
        }))
    );