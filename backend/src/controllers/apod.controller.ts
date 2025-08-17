import { NextFunction, Request, Response } from 'express';
import { Container, Service } from 'typedi';
import { ApodService } from '@/services/apod.service';
import asyncHandler from '@/utils/asyncHandler';
import { IApodResponse } from '@/interfaces/apod.interface';

@Service()
export class ApodController {
  public apod = Container.get(ApodService);

  public getApod = asyncHandler(async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      const apodData: IApodResponse[] = await this.apod.getApod(req.params);
      res.status(200).json({ data: apodData, message: 'APOD data retrieved successfully' });
  });
}
