import { IMarsRoverPhoto } from "@/types/mars.interfaces";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

interface MarsPhotoPopoverProps {
    photo: IMarsRoverPhoto;
}

export const MarsPhotoAllInfo: React.FC<MarsPhotoPopoverProps> = ({
    photo
}) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size="sm" variant="outline">View Details</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <div className="flex flex-col gap-2 p-4">
                    {/* Rover Info */}
                    <p className="text-lg font-semibold text-gray-700">Rover Name: {photo.rover.name}</p>
                    <p className="text-sm text-gray-500">Launch Date: {photo.rover.launch_date}</p>
                    <p className="text-sm text-gray-500">Landing Date: {photo.rover.landing_date}</p>
                    <p className="text-sm text-gray-500">Status: {photo.rover.status}</p>

                    {/* Camera Info */}
                    <p className="text-md font-semibold text-gray-700 mt-2">Camera Info</p>
                    <p className="text-sm text-gray-500">Name: {photo.camera.name}</p>
                    <p className="text-sm text-gray-500">Full Name: {photo.camera.full_name}</p>
                </div>
            </PopoverContent>
        </Popover>
    )
}