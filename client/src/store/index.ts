import { proxy } from 'valtio';

// App state interface
interface AppState {
    theme: 'light' | 'dark';
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
    };
    ui: {
        sidebarOpen: boolean;
        loading: boolean;
    };
}

// Create the global state proxy
export const appState = proxy<AppState>({
    theme: 'light',
    user: {
        id: null,
        name: null,
        email: null,
    },
    ui: {
        sidebarOpen: false,
        loading: false,
    },
});

// Actions for updating state
export const actions = {
    // Theme actions
    setTheme: (theme: 'light' | 'dark') => {
        appState.theme = theme;
    },
    toggleTheme: () => {
        appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    },

    // User actions
    setUser: (user: { id: string; name: string; email: string }) => {
        appState.user = user;
    },
    clearUser: () => {
        appState.user = {
            id: null,
            name: null,
            email: null,
        };
    },

    // UI actions
    toggleSidebar: () => {
        appState.ui.sidebarOpen = !appState.ui.sidebarOpen;
    },
    setLoading: (loading: boolean) => {
        appState.ui.loading = loading;
    },
};