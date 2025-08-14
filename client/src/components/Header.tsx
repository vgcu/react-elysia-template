import React from 'react';
import { Stack, Group, ThemeIcon, Title, Text, Button, Paper, Badge, useMantineColorScheme } from '@mantine/core';
import { IconCode, IconSparkles } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { ThemeToggle } from './ThemeToggle';
import { useAppState } from '../hooks/useStore';

export const Header: React.FC = () => {
    const { state } = useAppState();
    const { colorScheme } = useMantineColorScheme();

    const showDemoNotification = () => {
        const types = ['success', 'error', 'info', 'warning'] as const;
        const messages = [
            'Operation completed successfully!',
            'Something went wrong!',
            'Here is some information.',
            'Please be careful with this action.',
        ];
        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomMessage = messages[types.indexOf(randomType)];
        
        notifications.show({
            title: randomType.charAt(0).toUpperCase() + randomType.slice(1),
            message: randomMessage,
            color: randomType === 'success' ? 'green' : 
                   randomType === 'error' ? 'red' : 
                   randomType === 'warning' ? 'yellow' : 'blue',
            autoClose: 5000,
        });
    };

    const cardBackground = colorScheme === 'dark'
        ? 'rgba(37, 38, 43, 0.95)'
        : 'rgba(255, 255, 255, 0.95)';

    return (
        <Paper 
            shadow="xl" 
            radius="xl" 
            p={40} 
            style={{ 
                background: cardBackground,
                backdropFilter: 'blur(10px)',
                border: colorScheme === 'dark' 
                    ? '1px solid rgba(255, 255, 255, 0.1)' 
                    : '1px solid rgba(255, 255, 255, 0.2)'
            }}
        >
            <Stack align="center" gap={24}>
                <Group justify="space-between" w="100%">
                    <Badge 
                        variant="light" 
                        color="blue" 
                        size="lg"
                        leftSection={<IconSparkles size={16} />}
                    >
                        v1.0.0
                    </Badge>
                    <Group gap={12}>
                        <ThemeToggle />
                        <Button
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan' }}
                            size="sm"
                            onClick={showDemoNotification}
                            leftSection={<IconSparkles size={16} />}
                        >
                            Demo Notification
                        </Button>
                    </Group>
                </Group>
                
                <Group gap={20}>
                    <ThemeIcon 
                        size={80} 
                        radius="xl" 
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        <IconCode size={40} />
                    </ThemeIcon>
                    <Stack gap={8} align="center">
                        <Title 
                            order={1} 
                            size={48}
                            fw={700}
                            variant="gradient"
                        >
                            Fullstack Template
                        </Title>
                        <Text size="xl" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'} fw={500}>
                            A modern TypeScript monorepo with React 19 frontend and Elysia.js backend
                        </Text>
                    </Stack>
                </Group>
                
                <Group gap={32} mt={16}>
                    <Stack align="center" gap={4}>
                        <Text size="sm" c={colorScheme === 'dark' ? 'gray.5' : 'dimmed'} fw={600} tt="uppercase">
                            Theme
                        </Text>
                        <Badge variant="dot" color={state.theme === 'dark' ? 'dark' : 'yellow'}>
                            {state.theme}
                        </Badge>
                    </Stack>
                    <Stack align="center" gap={4}>
                        <Text size="sm" c={colorScheme === 'dark' ? 'gray.5' : 'dimmed'} fw={600} tt="uppercase">
                            Status
                        </Text>
                        <Badge variant="dot" color={state.ui.loading ? 'orange' : 'green'}>
                            {state.ui.loading ? 'Loading' : 'Ready'}
                        </Badge>
                    </Stack>
                    <Stack align="center" gap={4}>
                        <Text size="sm" c={colorScheme === 'dark' ? 'gray.5' : 'dimmed'} fw={600} tt="uppercase">
                            Framework
                        </Text>
                        <Badge variant="dot" color="blue">
                            React 19
                        </Badge>
                    </Stack>
                </Group>
            </Stack>
        </Paper>
    );
};