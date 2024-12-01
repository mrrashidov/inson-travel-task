import { Country, TravelTab } from "./data";

export type TravelState = {
    tab: TravelTab;
    form: {
        query: string;
        countries: Country[] | [];
        type_of_coverage: number | null;
        departure_date: Date | undefined;
        arrival_date: Date | undefined;
        days_of_stay: Date | null;
        travel_purpose: number | null;
        phone_number: string | undefined;
        select_program: string | number | undefined;
    };
    error: string | null;
    loading: boolean;
};

export interface TravelActions {
    setTab: (tab: TravelTab) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setForm: (key: string, value: any) => void;
}
