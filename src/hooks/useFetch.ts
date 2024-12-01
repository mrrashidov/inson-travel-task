import { useEffect, useState } from "react";

const getFromCache = (url: string) => {
    const cachedData = localStorage.getItem(url);
    return cachedData ? JSON.parse(cachedData) : null;
};

function setToCache<T>(url: string, data: T) {
    localStorage.setItem(url, JSON.stringify(data));
}

const useFetch = <T>(url: string, options?: RequestInit) => {
    const [data, setData] = useState<T | []>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // Agar URL bo'yicha kesh mavjud bo'lsa, uni yuklaymiz
        const cachedData = getFromCache(url);
        if (cachedData) {
            setData(cachedData);
            setLoading(false);
            return;
        }

        // Fetch so'rovini boshlash
        setLoading(true);
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(url, { ...options, signal });
                if (!response.ok) throw new Error("So'rov xato.");
                const result = await response.json();
                setData(result);
                setToCache<T>(url, result); // Keshga saqlash
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Komponent unmont bo'lsa, abort qilish
        return () => {
            abortController.abort();
        };
    }, [url, options, setData, setError, setLoading]);

    return { data, error, loading };
};

export default useFetch;
