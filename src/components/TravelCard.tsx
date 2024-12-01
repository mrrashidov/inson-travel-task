import { Activity, Country } from "#/data";
import useFetch from "@/hooks/useFetch";
import { useTravelStore } from "@/store/travel";
import { hasCommonIds } from "@/utils/helpers";
import {
    Field,
    Label,
    Button,
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Radio,
    RadioGroup,
} from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { tabs, type_of_coverages } from "@/utils/constants";
import PhoneInput from "./PhoneInput";
import DateTime from "./DateTime";

export default function TravelCard() {
    const { data, error, loading } = useFetch<Array<Country>>("/countries");
    const {
        data: activitiesData,
        error: activitiesError,
        loading: activitiesLoading,
    } = useFetch<Array<Activity>>("/activities");

    const { form, setForm, setTab } = useTravelStore();
    const filteredCountry =
        form.query === ""
            ? data
            : data.filter((country) => {
                  return country.name
                      .toLowerCase()
                      .includes(form.query.toLowerCase());
              });
    if (loading || activitiesLoading) return <div>Loading ...</div>;
    if (error || activitiesError) return <div>{error || activitiesError}</div>;

    function displayValue(selectedItems: Country[]): string {
        return selectedItems.map((item) => item.name).join(", ");
    }
    function handleComboboxChange(val: Array<Country>): void {
        if (form.countries.length > 2 && !hasCommonIds(val, form.countries)) {
            setForm("countries", val);
        } else if (form.countries.length <= 2) {
            setForm("countries", val);
        } else {
            alert("You can choose a maximum of 3 countries");
        }
    }
    const disabledArrivalDate = new Date();
    return (
        <div className="flex flex-col gap-y-3">
            <Field>
                <Label className="flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-indigo-900">
                        Name
                    </span>
                    <QuestionMarkCircleIcon className="size-5 stroke-indigo-900" />
                </Label>
                <Combobox
                    disabled={form.countries.length > 3}
                    multiple
                    immediate
                    virtual={{ options: filteredCountry }}
                    value={form.countries}
                    onChange={handleComboboxChange}
                    onClose={() => setForm("query", "")}
                >
                    <div className="relative">
                        <ComboboxInput
                            className={clsx(
                                "w-full rounded-lg border-none bg-gray-100 py-1.5 pr-8 pl-3 text-sm text-indigo-900",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            displayValue={displayValue}
                            onChange={(event) =>
                                setForm("query", event.target.value)
                            }
                        />
                        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                            <ChevronDownIcon className="size-4 fill-gray-900 group-data-[hover]:fill-indigo-950" />
                        </ComboboxButton>
                    </div>

                    <ComboboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            "w-[var(--input-width)] rounded-xl border border-gray-100 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                        )}
                    >
                        {({ option: country }) => (
                            <ComboboxOption
                                value={country}
                                className="group w-full flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-100"
                            >
                                <CheckIcon className="invisible size-4 fill-indigo-900 group-data-[selected]:visible" />
                                <div className="text-sm/6 text-indigo-900">
                                    {country.name}
                                </div>
                            </ComboboxOption>
                        )}
                    </ComboboxOptions>
                </Combobox>
            </Field>

            <Field>
                <Label className=" flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-indigo-900">
                        Тип покрытия
                    </span>
                    <QuestionMarkCircleIcon className="size-5 stroke-indigo-900" />
                </Label>

                <RadioGroup
                    value={form.type_of_coverage}
                    onChange={(val) => setForm("type_of_coverage", val)}
                    aria-label="Server size"
                >
                    {type_of_coverages.map((coverage, index) => (
                        <Field key={index} className="flex items-center gap-2">
                            <Radio
                                value={coverage.id}
                                className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-green-500"
                            >
                                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                            </Radio>
                            <Label className="text-indigo-900 text-sm">
                                {coverage.title}
                            </Label>
                        </Field>
                    ))}
                </RadioGroup>
            </Field>

            <DateTime
                disabled={disabledArrivalDate}
                label={"Начало страхования"}
                value={form.arrival_date}
                onChange={(date) => setForm("arrival_date", date)}
            />

            <DateTime
                disabled={form.arrival_date}
                label={"Конец страхования"}
                value={form.departure_date}
                onChange={(date) => setForm("departure_date", date)}
            />

            <Field>
                <Label className=" flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-indigo-900">
                        Цель
                    </span>
                    <QuestionMarkCircleIcon className="size-5 stroke-indigo-900" />
                </Label>
                <RadioGroup
                    value={form.travel_purpose}
                    onChange={(val) => setForm("travel_purpose", val)}
                    aria-label="travel purpose"
                    className="flex items-center justify-between"
                >
                    {activitiesData &&
                        !activitiesError &&
                        activitiesData.map((travel_purpose, index) => (
                            <Field
                                key={index}
                                className="flex items-center gap-1 md:gap-2"
                            >
                                <Radio
                                    value={travel_purpose.id}
                                    className="group flex size-4 md:size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                                >
                                    <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                </Radio>
                                <Label className="text-xs md:text-sm text-indigo-900">
                                    {travel_purpose.name}
                                </Label>
                            </Field>
                        ))}
                </RadioGroup>
            </Field>

            <Field>
                <Label className=" flex items-center justify-between py-2">
                    <span className="text-sm font-medium text-indigo-900">
                        Номер мобильного телефона
                    </span>
                    <QuestionMarkCircleIcon className="size-5 stroke-indigo-900" />
                </Label>

                <div className="flex gap-x-3">
                    <PhoneInput
                        value={form.phone_number}
                        onChange={(val) => setForm("phone_number", val)}
                    />
                </div>
            </Field>
            <Button
                onClick={() => setTab(tabs[2])}
                className="rounded-md bg-green-500 py-1.5 px-12 text-sm font-semibold text-white shadow-2xl"
            >
                Далее
            </Button>
        </div>
    );
}
