import { TravelPurposes, TravelTab, TypeOfCoverage } from "#/data";
import { title } from "process";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const programDescriptions: any = {
    silver: "Медицинское лечение, репатриация и другое",
    gold: "Всё вышеперечисленное + спасательная операция",
    platinum: "Всё вышеперечисленное во всех странах мира",
    "stopvirus |": "Всё вышеперечисленное + COVID",
    "stopvirus ||": "Всё вышеперечисленное + COVID, во всех странах",
};
export const tabs: Array<TravelTab> = [
    {
        id: 1,
        title: "Покупка страхового полиса",
    },
    {
        id: 2,
        title: "Сколько человек планируют поездку?",
    },
    {
        id: 3,
        title: "Выберите программу",
    },
];
export const type_of_coverages: Array<TypeOfCoverage> = [
    {
        id: 1,
        title: "Однократное путешествие",
    },
    {
        id: 2,
        title: "Многократное путешествие",
    },
];
export const travel_purposes: Array<TravelPurposes> = [
    {
        id: 1,
        title: "Туризм",
    },
    {
        id: 2,
        title: "Работа",
    },
    {
        id: 3,
        title: "Учёба",
    },
    {
        id: 4,
        title: "Спорт",
    },
];
export const days = Array.from({ length: 31 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString(),
}));

export const months = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString().padStart(2, "0"),
    label: (i + 1).toString(),
}));

const generateYears = (startYear: number, endYear: number) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
        years.push({ value: year.toString(), label: year.toString() });
    }
    return years;
};
export const years = generateYears(1900, new Date().getFullYear());
