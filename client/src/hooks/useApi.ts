import useSWR from 'swr';

// Generic fetcher function for SWR
const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return response.json();
};

// Custom hook for health check
export const useHealth = () => {
    const { data, error, isLoading, mutate: refetch } = useSWR('/api/health', fetcher, {
        refreshInterval: 30000, // Refresh every 30 seconds
        revalidateOnFocus: false,
    });

    return {
        health: data,
        isLoading,
        error: error?.message || null,
        refetch,
    };
};

// Custom hook for users
export const useUsers = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/users', fetcher);

    return {
        users: data?.users || [],
        isLoading,
        error: error?.message || null,
        mutate,
    };
};

// Custom hook for single user
export const useUser = (id: string | number) => {
    const { data, error, isLoading } = useSWR(
        id ? `/api/users/${id}` : null,
        fetcher
    );

    return {
        user: data?.user || null,
        isLoading,
        error: error?.message || null,
    };
};