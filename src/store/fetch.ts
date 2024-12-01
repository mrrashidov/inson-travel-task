import { create } from "zustand";

// Zustand store: global holatni boshqarish
interface FetchState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any | null;
    error: string | null;
    loading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setData: (data: any) => void;
    setError: (error: string) => void;
    setLoading: (loading: boolean) => void;
}

export const useFetchStore = create<FetchState>((set) => ({
    data: null,
    error: null,
    loading: false,
    setData: (data) => set({ data }),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ loading }),
}));
