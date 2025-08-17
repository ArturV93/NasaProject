import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

interface NumberInputProps {
    label: string;
    value?: number;
    onChange: (value: number | undefined) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange }) => {
    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="number">{label}</Label>
            <Input
                id="number"
                type="number"
                min={0}
                value={value ?? ''}
                onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") {
                        onChange(undefined); // allow clearing the input
                    } else {
                        onChange(Math.max(0, Number(val))); // enforce min 0
                    }
                }
                }
            />
        </div>
    );
};