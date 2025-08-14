import React from 'react';
import { Card, Group, ThemeIcon, Title, Stack, Text, Code, Badge, Divider, useMantineColorScheme } from '@mantine/core';
import { IconRocket, IconTerminal } from '@tabler/icons-react';

export const GettingStarted: React.FC = () => {
    const { colorScheme } = useMantineColorScheme();

    const cardStyle = colorScheme === 'dark'
        ? {
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            border: '1px solid #475569'
        }
        : {
            background: 'linear-gradient(135deg, #263238 0%, #37474f 100%)',
            border: '1px solid #546e7a'
        };

    return (
        <Card 
            shadow="lg" 
            padding={32} 
            radius="xl" 
            style={cardStyle}
        >
            <Stack gap={24}>
                <Group justify="space-between">
                    <Group gap={16}>
                        <ThemeIcon 
                            size={56} 
                            radius="xl" 
                            variant="gradient"
                            gradient={{ from: 'orange', to: 'yellow' }}
                        >
                            <IconRocket size={28} />
                        </ThemeIcon>
                        <Stack gap={4}>
                            <Title order={3} c="white" size={20} fw={700}>
                                Getting Started
                            </Title>
                            <Text size="sm" c={colorScheme === 'dark' ? 'gray.5' : 'gray.4'}>Quick setup commands</Text>
                        </Stack>
                    </Group>
                    <Badge variant="light" color="orange" size="lg" leftSection={<IconTerminal size={16} />}>
                        CLI Commands
                    </Badge>
                </Group>
                
                <Divider color={colorScheme === 'dark' ? 'gray.7' : 'gray.6'} />
                
                <Stack gap={16}>
                    <Text c={colorScheme === 'dark' ? 'gray.5' : 'gray.4'} size="sm" fw={600} tt="uppercase">
                        # Install dependencies
                    </Text>
                    <Code 
                        block 
                        color={colorScheme === 'dark' ? 'dark.8' : 'dark'} 
                        c={colorScheme === 'dark' ? 'green.3' : 'green.4'} 
                        p={16} 
                        style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                        bun install
                    </Code>
                    
                    <Text c={colorScheme === 'dark' ? 'gray.5' : 'gray.4'} size="sm" fw={600} tt="uppercase" mt={16}>
                        # Start both client and server
                    </Text>
                    <Code 
                        block 
                        color={colorScheme === 'dark' ? 'dark.8' : 'dark'} 
                        c={colorScheme === 'dark' ? 'blue.3' : 'blue.4'} 
                        p={16} 
                        style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                        bun dev
                    </Code>
                    
                    <Text c={colorScheme === 'dark' ? 'gray.5' : 'gray.4'} size="sm" fw={600} tt="uppercase" mt={16}>
                        # Or start individually
                    </Text>
                    <Code 
                        block 
                        color={colorScheme === 'dark' ? 'dark.8' : 'dark'} 
                        c={colorScheme === 'dark' ? 'cyan.3' : 'cyan.4'} 
                        p={16} 
                        style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                        bun run dev:client  # Vite dev server (port 3000)
                    </Code>
                    <Code 
                        block 
                        color={colorScheme === 'dark' ? 'dark.8' : 'dark'} 
                        c={colorScheme === 'dark' ? 'teal.3' : 'teal.4'} 
                        p={16} 
                        style={{ fontSize: '14px', fontWeight: 500 }}
                    >
                        bun run dev:server  # Elysia server (port {import.meta.env.PORT || 3001})
                    </Code>
                </Stack>
            </Stack>
        </Card>
    );
};