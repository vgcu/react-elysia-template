import React from 'react';
import { ActionIcon, useMantineColorScheme, Tooltip } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useTheme } from '../hooks/useStore';

export const ThemeToggle: React.FC = () => {
    const { setColorScheme } = useMantineColorScheme();
    const { theme, toggleTheme } = useTheme();

    const handleToggle = () => {
        toggleTheme();
        setColorScheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Tooltip 
            label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            position="bottom"
        >
            <ActionIcon
                onClick={handleToggle}
                variant="gradient"
                gradient={theme === 'dark' ? 
                    { from: 'yellow', to: 'orange' } : 
                    { from: 'indigo', to: 'purple' }
                }
                size="lg"
                radius="xl"
                aria-label="Toggle color scheme"
            >
                {theme === 'dark' ? (
                    <IconSun size={20} />
                ) : (
                    <IconMoon size={20} />
                )}
            </ActionIcon>
        </Tooltip>
    );
};