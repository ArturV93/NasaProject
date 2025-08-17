import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Service } from 'typedi';

@Service()
export class HttpClient {
    private client: AxiosInstance;

    constructor(){
        this.client = axios.create ({
            timeout: 5000,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const { data }: AxiosResponse<T> = await this.client.get<T>(url, config);
        return data;
    }
    
    //etc for other function
}