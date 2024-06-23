import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseApiProps<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
    execute: (config: AxiosRequestConfig) => Promise<void>;
}

export const useApi = <T,>(): UseApiProps<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const execute = useCallback(async (config: AxiosRequestConfig) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios(config);
            setData(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, []);

    return { data, error, loading, execute };
};
