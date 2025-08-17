import { NextFunction, Request, Response } from 'express';
import { Container, Service } from 'typedi';
import asyncHandler from '@/utils/asyncHandler';
import { MarsRoverService } from '@/services/marsRover.service';
import { IRoversResponse } from '@/interfaces/marsRoverPhotos.interface';

@Service()
export class MarsRoverController {
  public marsRoverService = Container.get(MarsRoverService);

  public getMarsRovers = asyncHandler(async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      const rovers: IRoversResponse = await this.marsRoverService.getMarsRovers();
      console.log(this.getMarsRovers);
      res.status(200).json({ data: rovers, message: 'Mars Rovers retrieved successfully' });
  });

  public getMarsPhotos = asyncHandler(async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      const photosData = await this.marsRoverService.getMarsPhotos(req.params.roverName, req.query);
      res.status(200).json({ data: photosData, message: 'Mars Rover photos retrieved successfully' });
  });
}
