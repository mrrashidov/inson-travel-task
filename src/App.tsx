import SelectProgram from "@/components/SelectProgram";
import TravelCardHeader from "@/components/TravelCardHeader";
import TravelCard from "@/components/TravelCard";
import TouristCard from "@/components/TouristCard";
import { useTravelStore } from "@/store/travel";
import TravelCardFooter from "./components/TravelCardFooter";

function App() {
    const { tab } = useTravelStore();
    return (
        <div className="flex flex-col bg-white border rounded-3xl shadow-2xl px-8 max-w-lg m-auto">
            <TravelCardHeader title={tab.title} activeTabId={tab.id} />

            {tab.id === 1 ? (
                <TravelCard />
            ) : tab.id === 2 ? (
                <TouristCard />
            ) : tab.id === 3 ? (
                <SelectProgram />
            ) : (
                <div />
            )}
            <TravelCardFooter />
        </div>
    );
}

export default App;
