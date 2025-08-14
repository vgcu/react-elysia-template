import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { staticPlugin } from '@elysiajs/static';
import { ApiControllers } from './controllers';

const app = new Elysia()
    // Enable CORS using the official plugin
    .use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }))
    
    // Serve frontend files from root
    .use(staticPlugin({
        assets: 'public',
        prefix: '/',
        indexHTML: true,
    }))
    // Serve any assets
    .use(staticPlugin({
        assets: 'resources',
        prefix: '/resources',
    }))
    
    // Register controllers
    .use(ApiControllers)
    
    .listen(Bun.env.PORT || 3001);

console.log(`🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`);