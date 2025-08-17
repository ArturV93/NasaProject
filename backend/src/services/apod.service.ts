import { NASA_API_KEY, NASA_URL } from "@/config";
import { HttpException } from "@/exceptions/HttpException";
import { IApodResponse } from "@/interfaces/apod.interface";
import { HttpClient } from "@/utils/httpClient";
import { logger } from "@/utils/logger";
import { Service } from 'typedi';

@Service()
export class ApodService {
    private readonly baseUrl: string = `${NASA_URL}/planetary/apod`;

    constructor(private readonly httpClient: HttpClient) {}

    async getApod(params: Record<string, any>): Promise<IApodResponse[]>{
        try {
            const response: IApodResponse[] = await this.httpClient.get(this.baseUrl, { params: { ...params, api_key: NASA_API_KEY }})    
            return response;
        } catch (error) {
            logger.error('getApod error: ', error);
            throw new HttpException(500, 'Failed to fetch APOD')
        }
    }
}