import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { ApodController } from '@/controllers/apod.controller';
import { ApodQueryDto } from '@/dtos/apod.dto';
import Container from 'typedi';

export class ApodRoute implements Routes {
  public path = '/apod';
  public router = Router();
  public apodController = Container.get(ApodController);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, ValidationMiddleware(ApodQueryDto, 'query'), this.apodController.getApod);
  }
}
