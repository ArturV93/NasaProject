
import axiosClient from "@/lib/axiosClient";
import { IMarsRoverPhoto, IMarsRoverPhotosQuery } from "../types/mars.interfaces";

export const getMarsPhotos = async(roverQuery: IMarsRoverPhotosQuery): Promise<IMarsRoverPhoto[]> => {
    let url = `/mrp/${roverQuery.roverName}?page=${roverQuery.page}`;
    if(roverQuery.sol && roverQuery.sol !== undefined) url = url.concat(`&sol=${roverQuery.sol}`);
    if(roverQuery.earth_date) url = url.concat(`&earth_date=${roverQuery.earth_date}`);
    const response = await axiosClient.get<{data: IMarsRoverPhoto[]}>(url);
    console.log(response);
    return response.data.data;
}

