import { ChevronDownIcon, X } from "lucide-react";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import React from "react";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

type DateFilterProps = {
    label: string;
    value: string | undefined;
    onChange: (date: string | undefined) => void;
};

export const DateFilter: React.FC<DateFilterProps> = ({ label, value, onChange }) => {
    const [open, setOpen] = React.useState(false);
    const selectedDate = value ? new Date(value) : undefined;

    return (
        <div className="flex flex-col gap-3">

            <Label htmlFor="date" className="px-1">
                {label}
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-full justify-between font-normal"
                    >
                        {selectedDate ? format(selectedDate, "yyyy-MM-dd") : "Select date"}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            captionLayout="dropdown"
                            hidden={{ after: new Date() }}
                            onSelect={(d) => {
                                if (!d) {
                                    onChange(undefined);
                                } else {
                                    onChange(format(d, "yyyy-MM-dd"));
                                }
                                setOpen(false);
                            }}
                            autoFocus
                        />
                        {selectedDate && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute bottom-2 right-2"
                                onClick={() => {
                                    onChange(undefined);
                                    setOpen(false);
                                }}
                            >Clear
                            </Button>
                        )}
                </PopoverContent>
            </Popover>
        </div>
    )
}