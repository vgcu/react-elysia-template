import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App.tsx';
import './index.css';
import '@mantine/notifications/styles.css';

const theme = createTheme({
    colorScheme: 'auto',
    primaryColor: 'blue',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
        ],
    },
    other: {
        gradients: {
            light: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            dark: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="auto">
            <Notifications />
            <App />
        </MantineProvider>
    </StrictMode>
);