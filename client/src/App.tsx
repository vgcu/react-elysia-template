import { Container, Box, Stack, useMantineColorScheme } from '@mantine/core';
import { Header } from './components/Header';
import { WorkspaceOverview } from './components/WorkspaceOverview';
import { ServerStatus } from './components/ServerStatus';
import { UsersData } from './components/UsersData';
import { GettingStarted } from './components/GettingStarted';

function App() {
    const { colorScheme } = useMantineColorScheme();
    
    const backgroundGradient = colorScheme === 'dark' 
        ? 'linear-gradient(135deg, #1a1b1e 0%, #25262b 50%, #2c2e33 100%)'
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';

    return (
        <Box 
            style={{ 
                minHeight: '100vh', 
                background: backgroundGradient,
                transition: 'background 0.3s ease',
            }}
        >
            <Container size="xl" py={40}>
                <Stack gap={40}>
                    <Header />
                    <WorkspaceOverview />
                    <ServerStatus />
                    <UsersData />
                    <GettingStarted />
                </Stack>
            </Container>
        </Box>
    );
}

export default App;