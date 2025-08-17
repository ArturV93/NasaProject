import { TRoverName } from "@/types/mars.interfaces";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

interface RoverSelectorProps {
    selectedRover: string;
    onChange: (rover: TRoverName) => void;
}
export const RoverSelector: React.FC<RoverSelectorProps> = ({ selectedRover,
    onChange }) => {

    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="rover">Select Rover:</Label>
            <Select value={selectedRover} onValueChange={onChange}>
                <SelectTrigger className="w-full" id='rover'>
                    <SelectValue placeholder="Choose a rover" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="curiosity">Curiosity</SelectItem>
                    <SelectItem value="opportunity">Opportunity</SelectItem>
                    <SelectItem value="spirit">Spirit</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
};