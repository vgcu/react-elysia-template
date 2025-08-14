import React from 'react';
import { Card, Group, Title, Button, Loader, Text, Alert, ThemeIcon, Stack, Badge, useMantineColorScheme } from '@mantine/core';
import { IconRefresh, IconCheck, IconX, IconServer } from '@tabler/icons-react';
import { useHealth } from '../hooks/useApi';

export const ServerStatus: React.FC = () => {
    const { health, isLoading: healthLoading, error: healthError, refetch } = useHealth();
    const { colorScheme } = useMantineColorScheme();

    const cardStyle = colorScheme === 'dark'
        ? {
            background: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)',
            border: '1px solid #f59e0b'
        }
        : {
            background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
            border: '1px solid #ff9800'
        };

    return (
        <Card 
            shadow="lg" 
            padding={32} 
            radius="xl" 
            maw={700} 
            mx="auto"
            style={cardStyle}
        >
            <Stack gap={24}>
                <Group justify="space-between">
                    <Group gap={16}>
                        <ThemeIcon 
                            size={56} 
                            radius="xl" 
                            variant="gradient"
                            gradient={{ from: 'orange', to: 'red' }}
                        >
                            <IconServer size={28} />
                        </ThemeIcon>
                        <Stack gap={4}>
                            <Title order={3} size={20} fw={700}>
                                Server Connection Status
                            </Title>
                            <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'}>Real-time health monitoring</Text>
                        </Stack>
                    </Group>
                    <Group gap={12}>
                        {health && (
                            <Badge variant="dot" color="green" size="lg">
                                Connected
                            </Badge>
                        )}
                        <Button
                            variant="light"
                            size="sm"
                            leftSection={<IconRefresh size={16} />}
                            onClick={refetch}
                            loading={healthLoading}
                        >
                            Refresh
                        </Button>
                    </Group>
                </Group>
            
                {healthLoading && (
                    <Alert
                        icon={<Loader size={16} />}
                        title="Connecting"
                        color="blue"
                        variant="light"
                        radius="md"
                    >
                        <Text>Establishing connection to server...</Text>
                    </Alert>
                )}

                {healthError && (
                    <Alert
                        icon={<IconX size={16} />}
                        title="Connection Error"
                        color="red"
                        variant="light"
                        radius="md"
                    >
                        <Text fw={500} c={colorScheme === 'dark' ? 'red.3' : 'red.7'}>{healthError}</Text>
                        <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'} mt={8}>
                            Make sure the server is running on port {import.meta.env.PORT || 3001} and try again.
                        </Text>
                    </Alert>
                )}

                {health && (
                    <Alert
                        icon={<IconCheck size={16} />}
                        title="Connected Successfully!"
                        color="green"
                        variant="light"
                        radius="md"
                    >
                        <Text fw={500} c={colorScheme === 'dark' ? 'green.3' : 'green.7'}>Server says: {health.message}</Text>
                        <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'} mt={8}>
                            Last updated: {new Date(health.timestamp).toLocaleString()}
                        </Text>
                    </Alert>
                )}
            </Stack>
        </Card>
    );
};