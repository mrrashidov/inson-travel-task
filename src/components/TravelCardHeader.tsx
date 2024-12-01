import { useTravelStore } from "@/store/travel";
import { tabs } from "@/utils/constants";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function TravelCardHeader({
    title,
    activeTabId,
}: {
    title: string;
    activeTabId: number;
}) {
    const { tab, setTab } = useTravelStore();
    return (
        <>
            <div className="flex">
                <ul className="box-content flex w-full items-center justify-start">
                    {[1, 2, 3, 4, 5].map((a) => (
                        <li
                            key={a}
                            className={`${
                                a === activeTabId
                                    ? "bg-green-400"
                                    : "bg-gray-200"
                            } py-1 rounded-lg w-12 md:w-16 mr-2`}
                        />
                    ))}
                </ul>
                <button
                    disabled={tab.id === 1}
                    onClick={() => setTab(tabs[0])}
                    className="text-white rounded-full bg-indigo-900 p-3 ml-8 md:ml-12 mt-2"
                >
                    <ArrowLeftIcon className="size-5" />
                </button>
            </div>
            <h2 className="text-2xl font-bold text-indigo-900 py-3">{title}</h2>
        </>
    );
}
