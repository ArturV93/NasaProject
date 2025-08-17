import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { MarsPhotoAllInfo } from "./marsAllInfo";
import { IMarsRoverPhoto } from "@/types/mars.interfaces";

interface MarsCardProps {
  photo: IMarsRoverPhoto;
}
export const MarsCard: React.FC<MarsCardProps> = ({ photo }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>{photo.rover.name}</CardTitle>
      </CardHeader>
      <div className="p-2">
        <img src={photo.img_src} alt={photo.rover.name} className="w-full h-48 object-cover rounded-md" />
      </div>
      <CardContent className="flex flex-col gap-1">
        <p><span className="font-semibold">Earth Date:</span> {photo.earth_date}</p>
        <p><span className="font-semibold">Sol Martian day:</span> {photo.sol}</p>
      </CardContent>
      <CardFooter>
        <MarsPhotoAllInfo photo = {photo}/>
      </CardFooter>
    </Card>
  );
};