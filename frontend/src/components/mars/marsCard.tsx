import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { MarsPhotoAllInfo } from "./marsAllInfo";
import { IMarsRoverPhoto } from "@/types/mars.interfaces";
import { useState } from "react";

interface MarsCardProps {
  photo: IMarsRoverPhoto;
}
export const MarsCard: React.FC<MarsCardProps> = ({ photo }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>{photo.rover.name}</CardTitle>
      </CardHeader>
      <div className="p-2">
        {photo.img_src && !imgError ? (
          <img src={photo.img_src} alt={photo.rover.name} onError={() => setImgError(true)} className="w-full h-48 object-cover rounded-md" />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            Image not available
          </div>
        )}
      </div>
      <CardContent className="flex flex-col gap-1">
        <p><span className="font-semibold">Earth Date:</span> {photo.earth_date}</p>
        <p><span className="font-semibold">Sol Martian day:</span> {photo.sol}</p>
      </CardContent>
      <CardFooter>
        <MarsPhotoAllInfo photo={photo} />
      </CardFooter>
    </Card>
  );
};