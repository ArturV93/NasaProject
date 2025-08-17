import { useEffect, useState } from "react";
import { useMarsStore } from "../store/marsRovers";
import { CustomeAlert } from "@/components/customeAlret";
import { PageContainer } from "@/components/pageContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { NumberInput } from "@/components/numberInput";
import { IMarsRoverPhotosQuery, TRoverName } from "@/types/mars.interfaces";
import { DateFilter } from "@/components/dateFilter";
import { RoverSelector } from "@/components/mars/roverSelector";
import { MarsCard } from "@/components/mars/marsCard";
import { AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarsCardSkeleton } from "@/components/mars/marsCardSkeleton";


const Mars: React.FC = () => {
    const { photos, loading, error, fetchRovers, fetchNextPage, hasMore } = useMarsStore();
    const [selectedRover, setSelectedRover] = useState<IMarsRoverPhotosQuery>({
        roverName: "curiosity",
        sol: 1000,
        camera: undefined,
        earth_date: undefined,
        page: 1
    });

    useEffect(() => {
        if (selectedRover) fetchRovers(selectedRover);
    }, [selectedRover]);


    return (
        <PageContainer>
            <div className="w-full flex flex-wrap gap-3">
                <div className="w-full md:flex-1">
                    <RoverSelector
                        selectedRover={selectedRover.roverName}
                        onChange={(roverName: TRoverName) =>
                            setSelectedRover((prev) => ({ ...prev, roverName }))
                        }
                    />
                </div>
                <div className="w-full md:flex-1">

                    <NumberInput
                        label="sol (Martian day)"
                        value={selectedRover.sol}
                        onChange={(sol) =>
                            setSelectedRover((prev) => ({ ...prev, sol }))
                        }
                    />
                </div>
                <div className="w-full md:flex-1">
                    <DateFilter label="Filter by Date" value={selectedRover.earth_date} onChange={(earth_date) =>
                        setSelectedRover((prev) => ({ ...prev, earth_date, sol: undefined }))
                    } />
                </div>
            </div>
            <div className="flex mt-2 justify-end">
                <button
                    className="px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition"
                    onClick={() =>
                        setSelectedRover({ roverName: 'curiosity', sol: undefined, earth_date: undefined, page: 1 })
                    }
                >
                    Reset Filters
                </button>
            </div>

            {error && (
                <><CustomeAlert
                    variant="destructive"
                    title="Error fetching rovers"
                    description={error}
                    icon={AlertCircleIcon}
                    action={
                        <button
                            onClick={() => fetchRovers(selectedRover)}
                            className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                            Try Again
                        </button>
                    }
                />

                </>
            )}

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {!loading && (photos && photos.length > 0 ? (
                    photos.map((photo) => (
                        <div key={photo.id} className="p-2">
                            <MarsCard
                                key={photo.id}
                                photo={photo}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex justify-center items-center h-64 text-gray-500 text-lg font-medium">
                        Nothing found
                    </div>
                ))}
                {loading && Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-2">
                        <MarsCardSkeleton />
                    </div>
                ))}
            </div>

            {hasMore && !loading && photos.length > 0 && (
                <div className="flex justify-center mt-4">
                    <Button
                        variant="default"
                        onClick={(e) => {
                            e.preventDefault();
                            fetchNextPage(selectedRover);
                        }}
                    >
                        Load More
                    </Button>
                </div>
            )}
        </PageContainer>
    );
};

export default Mars;