import { NASA_API_KEY, NASA_URL } from "@/config";
import { HttpException } from "@/exceptions/HttpException";
import { IMarsRoverPhoto, IMarsRoverPhotosResponse, IRoversResponse } from "@/interfaces/marsRoverPhotos.interface";
import { HttpClient } from "@/utils/httpClient";
import { logger } from "@/utils/logger";
import { Service } from 'typedi';

@Service()
export class MarsRoverService {
    private readonly baseUrl: string = `${NASA_URL}/mars-photos/api/v1/rovers`;

    constructor(private readonly httpClient: HttpClient) {}

    public async getMarsRovers(): Promise<IRoversResponse>{
        try {
            const response: IRoversResponse = await this.httpClient.get(this.baseUrl, { params: { api_key: NASA_API_KEY }}); 
            return response;
        } catch (error) {
            logger.error('getMarsPhotos: ', error);
            throw new HttpException(500, 'Unable to retrieve Mars rovers data from NASA API');
        }
    }

    public async getMarsPhotos(roverName: string, query: Record<string,any>): Promise<IMarsRoverPhotosResponse[]>{
        try {
            const response = await this.httpClient.get(`${this.baseUrl}/${roverName}/photos`, { params: { ...query, api_key: NASA_API_KEY }});
            return response['photos'];
        } catch (error) {
            logger.error('getMarsPhotos: ', error);
            throw new HttpException(500, 'Unable to retrieve Mars rover photos from NASA API');
        }
    }
}