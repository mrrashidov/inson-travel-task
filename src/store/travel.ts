import { tabs } from "@/utils/constants";
import { create } from "zustand";
import { TravelState, TravelActions } from "#/store";
// Zustand store: global holatni boshqarish
const initialState: TravelState = {
    tab: tabs[0],
    form: {
        query: "",
        countries: [],
        type_of_coverage: null,
        departure_date: undefined,
        arrival_date: undefined,
        days_of_stay: null,
        travel_purpose: null,
        phone_number: undefined,
        select_program: undefined,
    },
    error: null,
    loading: false,
};
export const useTravelStore = create<TravelState & TravelActions>((set) => ({
    ...initialState,
    setTab(tab) {
        set({ tab });
    },
    setForm(field, value) {
        set((state) => ({
            ...state,
            form: {
                ...state.form,
                [field]: value,
            },
        }));
    },
}));
