import request from 'supertest';
import { App } from '@/app';
import { MarsRoverRoute } from '@/routes/marsRover.route';
import { IMarsRoverPhotosResponse, IRoversResponse } from '@/interfaces/marsRoverPhotos.interface';
import { MarsRoverService } from '@/services/marsRover.service';
import Container from 'typedi';
import { HttpClient } from '@/utils/httpClient';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

const mockRovers: IRoversResponse = {
  rovers: [
    {
      id: 5,
      name: 'Curiosity',
      landing_date: '2012-08-06',
      launch_date: '2011-11-26',
      status: 'active',
      max_sol: 1000,
      max_date: '2015-05-30',
      total_photos: 5000,
      cameras: [
        { name: 'FHAZ', full_name: 'Front Hazard Avoidance Camera' },
      ],
    },
  ],
};

const mockPhotos: IMarsRoverPhotosResponse = {
  photos: [
    {
      id: 102693,
      sol: 1004,
      camera: {
        id: 20,
        name: 'FHAZ',
        rover_id: 5,
        full_name: 'Front Hazard Avoidance Camera',
      },
      img_src: 'http://mars.jpl.nasa.gov/image.jpg',
      earth_date: '2015-06-03',
      rover: {
        id: 5,
        name: 'Curiosity',
        landing_date: '2012-08-06',
        launch_date: '2011-11-26',
        status: 'active',
      },
    },
  ],
};

describe('TEST Mars Rover API', () => {
  const route = new MarsRoverRoute();

  beforeAll(() => {
    Container.set(HttpClient, {
      get: jest.fn().mockResolvedValue(true),
    });
    Container.set(MarsRoverService, {
      getMarsRovers: jest.fn().mockResolvedValue(mockRovers),
      getMarsPhotos: jest.fn().mockResolvedValue(mockPhotos),
    });
  });

  afterAll(() => {
    Container.reset();
  });

  const app = new App([route]);

  describe('[GET] /rovers', () => {
    it('should return a list of rovers', async () => {
      const response = await request(app.getServer()).get(`${route.path}/rovers`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: mockRovers,
        message: 'Mars Rovers retrieved successfully', // must match your controller
      });
    });
  });

  describe('[GET] /rovers/:roverName/photos', () => {
    it('should return a list of photos for a rover', () => {
      const roverName = 'curiosity';
      return request(app.getServer())
        .get(`${route.path}/rovers/${roverName}/photos?sol=1000`)
        .expect(200, { data: mockPhotos, message: 'getMarsPhotos' });
    });
  });

});
