import React from 'react';
import { Grid, Card, Group, ThemeIcon, Title, List, Text, Badge, Stack, useMantineColorScheme } from '@mantine/core';
import { IconWorld, IconServer, IconCheck } from '@tabler/icons-react';

export const WorkspaceOverview: React.FC = () => {
    const { colorScheme } = useMantineColorScheme();

    const clientCardStyle = colorScheme === 'dark' 
        ? {
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
            border: '1px solid #3b82f6'
        }
        : {
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            border: '1px solid #2196f3'
        };

    const serverCardStyle = colorScheme === 'dark'
        ? {
            background: 'linear-gradient(135deg, #14532d 0%, #166534 100%)',
            border: '1px solid #22c55e'
        }
        : {
            background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
            border: '1px solid #4caf50'
        };

    return (
        <Grid gutter={24}>
            {/* Client Workspace */}
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Card 
                    shadow="lg" 
                    padding={32} 
                    radius="xl" 
                    h="100%"
                    style={clientCardStyle}
                >
                    <Stack gap={20}>
                        <Group justify="space-between">
                            <Group gap={16}>
                                <ThemeIcon 
                                    size={56} 
                                    radius="xl" 
                                    variant="gradient"
                                    gradient={{ from: 'blue', to: 'indigo' }}
                                >
                                    <IconWorld size={28} />
                                </ThemeIcon>
                                <Stack gap={4}>
                                    <Title order={2} size={24} fw={700}>Client</Title>
                                    <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'}>Frontend Application</Text>
                                </Stack>
                            </Group>
                            <Badge variant="light" color="blue" size="lg">
                                Port 3000
                            </Badge>
                        </Group>
                        <List 
                            spacing={8}
                            icon={<IconCheck size={16} color={colorScheme === 'dark' ? 'var(--mantine-color-blue-4)' : 'var(--mantine-color-blue-6)'} />}
                        >
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Vite + React 19</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>TypeScript</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Mantine UI Components</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Tabler Icons</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Hot Module Replacement</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Proxy setup for API calls</Text></List.Item>
                        </List>
                    </Stack>
                </Card>
            </Grid.Col>

            {/* Server Workspace */}
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Card 
                    shadow="lg" 
                    padding={32} 
                    radius="xl" 
                    h="100%"
                    style={serverCardStyle}
                >
                    <Stack gap={20}>
                        <Group justify="space-between">
                            <Group gap={16}>
                                <ThemeIcon 
                                    size={56} 
                                    radius="xl" 
                                    variant="gradient"
                                    gradient={{ from: 'green', to: 'teal' }}
                                >
                                    <IconServer size={28} />
                                </ThemeIcon>
                                <Stack gap={4}>
                                    <Title order={2} size={24} fw={700}>Server</Title>
                                    <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'}>Backend API</Text>
                                </Stack>
                            </Group>
                            <Badge variant="light" color="green" size="lg">
                                Port {import.meta.env.PORT || 3001}
                            </Badge>
                        </Group>
                        <List 
                            spacing={8}
                            icon={<IconCheck size={16} color={colorScheme === 'dark' ? 'var(--mantine-color-green-4)' : 'var(--mantine-color-green-6)'} />}
                        >
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Elysia.js Framework</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>TypeScript</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>CORS Enabled</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Hot Reload</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>RESTful API Structure</Text></List.Item>
                            <List.Item><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>Bun Runtime</Text></List.Item>
                        </List>
                    </Stack>
                </Card>
            </Grid.Col>
        </Grid>
    );
};