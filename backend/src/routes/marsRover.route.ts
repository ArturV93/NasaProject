import { MarsRoverController } from "@/controllers/marsRover.controller";
import { MarsRoverNameParamsDto, MarsRoverPhotosQueryDto } from "@/dtos/marsRover.dto";
import { Routes } from "@/interfaces/routes.interface";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { MarsRoverService } from "@/services/marsRover.service";
import { Router } from "express";
import Container from "typedi";

export class MarsRoverRoute implements Routes {
  public path = '/mrp';
  public router = Router();
  public marsRoverController = Container.get(MarsRoverController);

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/rovers`, this.marsRoverController.getMarsRovers);
    this.router.get(`${this.path}/:roverName`, ValidationMiddleware(MarsRoverNameParamsDto, 'params'), ValidationMiddleware(MarsRoverPhotosQueryDto, 'query'), this.marsRoverController.getMarsPhotos);
  }
}
