# Fullstack TypeScript Template

A fullstack template with separate client and server workspaces, built with TypeScript throughout. Features a polished UI with Mantine components and modern design patterns.

## 🏗️ Project Structure

```
├── client/          # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── components/  # Modular React components
│   │   ├── hooks/       # Custom React hooks
│   │   └── store/       # Global state management
├── server/          # Elysia.js backend (TypeScript)
│   └── src/
│       └── controllers/ # API route controllers
├── package.json     # Root workspace configuration
└── tsconfig.json    # Root TypeScript configuration
```

## 🚀 Tech Stack

### Client Workspace
- **React 19** - UI library
- **Vite 7** - Latest build tool and dev server
- **TypeScript** - Type safety
- **Mantine UI** - Modern React components library
- **Tabler Icons** - Beautiful icon set
- **SWR** - Data fetching and caching
- **Valtio** - Lightweight state management
- **ESLint** - Code linting

### Server Workspace
- **Elysia.js** - Fast and modern web framework
- **Bun** - JavaScript runtime (recommended)
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

## ✨ Features

- **Modern Design** - Beautiful, professional UI with gradient backgrounds and glass-morphism effects
- **Component Architecture** - Well-organized, modular components for maintainability
- **Real-time Status** - Live server health monitoring and connection status
- **State Management** - Global state with Valtio for theme, notifications, and user data
- **Notification System** - Toast notifications with auto-dismiss and multiple types
- **Responsive Design** - Mobile-first design that works on all screen sizes
- **Type Safety** - Full TypeScript coverage across client and server
- **Hot Reload** - Instant updates during development
- **4-Space Indentation** - Consistent code formatting throughout the project

## 📦 Installation

```bash
# Install all dependencies for both workspaces
bun install
```

## 🔧 Development

```bash
# Start both client and server concurrently
bun dev

# Start client only (port 3000)
bun dev:client

# Start server only (port 3001)
bun dev:server
```

## 🛠️ Build

```bash
# Build both workspaces
bun run build

# Build client only
bun build:client

# Build server only
bun build:server
```

## 🧪 Linting

```bash
# Lint both workspaces
bun run lint
```

## 🎨 Design System

The application follows modern design principles with:

- **Consistent Color Palette** - Themed gradients and color schemes
- **Typography Hierarchy** - Clear visual hierarchy with proper font weights
- **Spacing System** - Consistent spacing using Mantine's spacing scale
- **Interactive Elements** - Hover states, transitions, and micro-interactions
- **Glass-morphism** - Modern frosted glass effects on key components
- **Responsive Grid** - Flexible layouts that adapt to all screen sizes

## 🔧 Component Architecture

The client is organized into modular components:

- **Header** - Main application header with theme toggle and notifications
- **WorkspaceOverview** - Client and server workspace information cards
- **ServerStatus** - Real-time server health monitoring
- **UsersData** - Dynamic user data table with refresh functionality
- **GettingStarted** - Command reference with syntax highlighting
- **NotificationCenter** - Toast notification system
- **ThemeToggle** - Light/dark theme switcher

## 🌐 API Endpoints

The server provides the following endpoints:

- `GET /health` - Health check
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user

## 🔄 Client-Server Communication

The client is configured with a proxy to forward `/api/*` requests to the server running on port 3001. This eliminates CORS issues during development.

## 📱 State Management

The application uses Valtio for lightweight state management:

- **Theme State** - Light/dark mode preferences
- **User State** - User authentication and profile data
- **UI State** - Loading states, sidebar, and notifications
- **Reactive Updates** - Automatic re-renders when state changes

## 📁 Workspace Commands

You can run commands in specific workspaces using:

```bash
# Run command in client workspace
bun --filter='client' run <command>

# Run command in server workspace  
bun --filter='server' run <command>
```

## 🎯 Key Highlights

- **Monorepo Structure** - Organized workspaces for frontend and backend
- **Full TypeScript** - End-to-end type safety
- **Hot Reload** - Both client and server support hot reloading
- **Modern Tooling** - Latest versions of all dependencies
- **CORS Configured** - Ready for client-server communication
- **Proxy Setup** - Seamless API calls from client to server
- **Production Ready** - Build scripts for deployment
- **Beautiful UI** - Professional design with modern components
- **Modular Architecture** - Clean, maintainable code structure

## 🚀 Getting Started

1. Clone this template
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start both client and server
4. Open http://localhost:3000 to see the client
5. Server API available at http://localhost:3001
