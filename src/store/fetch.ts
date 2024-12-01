import { create } from "zustand";

// Zustand store: global holatni boshqarish
interface FetchState {
    data: any | null;
    error: string | null;
    loading: boolean;
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
