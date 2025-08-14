import { useSnapshot } from 'valtio';
import { appState, actions } from '../store';

// Custom hook to use the global state
export const useAppState = () => {
    const snap = useSnapshot(appState);
    return { state: snap, actions };
};

// Specific hooks for different parts of the state
export const useTheme = () => {
    const snap = useSnapshot(appState);
    return {
        theme: snap.theme,
        setTheme: actions.setTheme,
        toggleTheme: actions.toggleTheme,
    };
};

export const useUser = () => {
    const snap = useSnapshot(appState);
    return {
        user: snap.user,
        setUser: actions.setUser,
        clearUser: actions.clearUser,
    };
};

export const useUI = () => {
    const snap = useSnapshot(appState);
    return {
        ui: snap.ui,
        toggleSidebar: actions.toggleSidebar,
        setLoading: actions.setLoading,
    };
};