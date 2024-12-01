import "react-day-picker/dist/style.css";
import {
    Label,
    Popover,
    PopoverButton,
    PopoverPanel,
    Field,
} from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
type DateTimeProps = {
    label: string;
    value: Date | undefined;
    disabled?: Date | undefined;
    onChange: (e: Date) => void;
};
export default function DateTime({
    label,
    value,
    disabled,
    onChange,
}: DateTimeProps) {
    return (
        <Field>
            <Label className=" flex items-center justify-between py-2">
                <span className="text-sm font-medium text-indigo-900">
                    {label}
                </span>
                <QuestionMarkCircleIcon className="size-5 stroke-indigo-900" />
            </Label>
            <Popover className="relative">
                <PopoverButton className="w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                        value={value ? format(value, "PPP") : ""}
                    />
                </PopoverButton>
                <PopoverPanel
                    anchor="bottom"
                    className="flex flex-col bg-white shadow-2xl rounded-md p-2"
                >
                    {({ close }) => (
                        <DayPicker
                            required
                            disabled={
                                disabled ? { before: disabled } : disabled
                            }
                            id={label}
                            key={label}
                            mode="single"
                            selected={value}
                            onSelect={(val) => {
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                const formatDate: any = format(
                                    val,
                                    "yyyy-MM-dd"
                                );
                                onChange(formatDate);
                                close();
                            }}
                        />
                    )}
                </PopoverPanel>
            </Popover>
        </Field>
    );
}
