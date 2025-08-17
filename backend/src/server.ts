import { App } from '@/app';
import { ApodRoute } from '@/routes/apod.route';
import { ValidateEnv } from '@utils/validateEnv';
import { MarsRoverRoute } from './routes/marsRover.route';

ValidateEnv();

const app = new App([new ApodRoute(), new MarsRoverRoute()]);

app.listen();
