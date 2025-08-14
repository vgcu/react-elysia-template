import React from 'react';
import { Card, Group, ThemeIcon, Title, Button, Loader, Text, Alert, Table, Stack, Badge, useMantineColorScheme } from '@mantine/core';
import { IconUsers, IconRefresh, IconX } from '@tabler/icons-react';
import { useUsers } from '../hooks/useApi';

export const UsersData: React.FC = () => {
    const { users, isLoading: usersLoading, error: usersError, mutate: mutateUsers } = useUsers();
    const { colorScheme } = useMantineColorScheme();

    const cardStyle = colorScheme === 'dark'
        ? {
            background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 100%)',
            border: '1px solid #a855f7'
        }
        : {
            background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
            border: '1px solid #9c27b0'
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
                            gradient={{ from: 'purple', to: 'pink' }}
                        >
                            <IconUsers size={28} />
                        </ThemeIcon>
                        <Stack gap={4}>
                            <Title order={3} size={20} fw={700}>Users Data</Title>
                            <Text size="sm" c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'}>Sample user records from API</Text>
                        </Stack>
                    </Group>
                    <Group gap={12}>
                        {users && users.length > 0 && (
                            <Badge variant="dot" color="purple" size="lg">
                                {users.length} users
                            </Badge>
                        )}
                        <Button
                            variant="light"
                            size="sm"
                            leftSection={<IconRefresh size={16} />}
                            onClick={mutateUsers}
                            loading={usersLoading}
                        >
                            Refresh Users
                        </Button>
                    </Group>
                </Group>

                {usersLoading && (
                    <Alert
                        icon={<Loader size={16} />}
                        title="Loading"
                        color="purple"
                        variant="light"
                        radius="md"
                    >
                        <Text>Fetching user data from server...</Text>
                    </Alert>
                )}

                {usersError && (
                    <Alert
                        icon={<IconX size={16} />}
                        title="Failed to load users"
                        color="red"
                        variant="light"
                        radius="md"
                    >
                        <Text fw={500} c={colorScheme === 'dark' ? 'red.3' : 'red.7'}>{usersError}</Text>
                    </Alert>
                )}

                {users && users.length > 0 && (
                    <Table 
                        striped 
                        highlightOnHover 
                        withTableBorder
                        withColumnBorders
                    >
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th><Text fw={600}>ID</Text></Table.Th>
                                <Table.Th><Text fw={600}>Name</Text></Table.Th>
                                <Table.Th><Text fw={600}>Email</Text></Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {users.map((user: any) => (
                                <Table.Tr key={user.id}>
                                    <Table.Td>
                                        <Badge variant="light" color="purple" size="sm">
                                            {user.id}
                                        </Badge>
                                    </Table.Td>
                                    <Table.Td><Text fw={500} c={colorScheme === 'dark' ? 'gray.1' : 'dark'}>{user.name}</Text></Table.Td>
                                    <Table.Td><Text c={colorScheme === 'dark' ? 'gray.4' : 'dimmed'}>{user.email}</Text></Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                )}
            </Stack>
        </Card>
    );
};