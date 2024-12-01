import { Program } from "#/data";
import useFetch from "@/hooks/useFetch";
import { Button, Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { programDescriptions } from "@/utils/constants";
import { useTravelStore } from "@/store/travel";

export default function SelectProgram() {
    const { form, setForm } = useTravelStore();
    const { data, error, loading } = useFetch("/programs");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const programs: Program[] | [] = data ? data : [];

    const findSelectedProgram =
        !loading && programs
            ? programs.find((program) => program.id === form.select_program)
            : null;
    const prgramPrice = findSelectedProgram ? findSelectedProgram.liability : 0;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    function handleSave() {
        console.log("form", form);
    }

    return (
        <div>
            <RadioGroup
                value={form.select_program}
                onChange={(val) => setForm("select_program", val)}
                aria-label="Server size"
                className="space-y-4"
            >
                {programs &&
                    programs.length > 0 &&
                    programs.map((program, index) => (
                        <Radio
                            key={index}
                            value={program.id}
                            className="group relative border border-gray-300 flex cursor-pointer rounded-lg bg-gray-100 py-3 px-2 text-white transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-50"
                        >
                            <div className="flex w-full items-start justify-between">
                                <CheckCircleIcon className="pr-1 size-6 fill-gray-300 transition group-data-[checked]:fill-green-400" />
                                <div className="text-base w-full">
                                    <p className="text-indigo-900 group-data-[checked]:text-green-400">
                                        {program.name}
                                    </p>
                                    <p className="font-semibold text-indigo-900 group-data-[checked]:text-green-400">
                                        Общее покрытие -{" "}
                                        {program.liability?.toLocaleString(
                                            "EUR"
                                        )}{" "}
                                        EUR
                                    </p>

                                    <div className="flex gap-2 text-indigo-900 text-sm font-light">
                                        {
                                            programDescriptions[
                                                program.name.toLowerCase()
                                            ]
                                        }
                                    </div>
                                </div>
                            </div>
                        </Radio>
                    ))}
            </RadioGroup>
            <Button className="items-center justify-center px-2 py-4 text-indigo-900 font-bold">
                Сравнить программы
            </Button>

            <Button
                onClick={() => handleSave()}
                className="bg-green-400 flex w-full items-center justify-between px-4 py-2 text-white font-semibold rounded-lg"
            >
                <span>Выбрать Gold</span>
                <span>UZS {prgramPrice?.toLocaleString("en")}</span>
            </Button>
        </div>
    );
}
