// Faoliyatlar uchun interface
export type Activity = {
    id: number; // Unikal identifikator
    name: string; // Faoliyat nomi
};

// Dasturlar uchun interface
export type Coverage = {
    medicine: number; // Tibbiy sug'urta qamrovi
    accident: number; // Baxtsiz hodisalar uchun qamrov
    covid: number; // Covid-19 uchun qamrov
    evacuation: number; // Evakuatsiya qamrovi
    transportation: number; // Transport xarajatlari qamrovi
    compensation: number; // Kompensatsiya qamrovi
};

export type Program = {
    id: number; // Unikal identifikator
    name: string; // Dastur nomi
    liability: number | null; // Majburiyat miqdori
    coverages: Coverage | null; // Qamrovlar (agar mavjud bo'lsa)
};

// Mamlakatlar uchun interface
export type CountryProgram = Program;

export type Country = {
    id: number; // Unikal identifikator
    name: string; // Mamlakat nomi
    isInSchengen: number; // Shengen hududiga tegishliligi
    programs: CountryProgram[]; // Mamlakatdagi dasturlar
};

export type TravelTab = {
    id: number;
    title: string;
};
export type TypeOfCoverage = {
    id: number;
    title: string;
};

export type TravelPurposes = {
    id: number;
    title: string;
};
