import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function TravelCardFooter() {
    return (
        <div className="flex gap-x-1 my-4">
            <InformationCircleIcon className="size-5 fill-green-400" />
            <span className="text-sm font-light text-indigo-900">
                Не волнуйтесь! Вы можете покинуть сайт и продолжить с этого
                момента в любое время
            </span>
        </div>
    );
}
