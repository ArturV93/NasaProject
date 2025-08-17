export interface IRoverCamera {
  name: string;
  full_name: string;
}

export interface IRover {
  id: number;
  name: string;
  landing_date: string; // YYYY-MM-DD
  launch_date: string;  // YYYY-MM-DD
  status: 'active' | 'complete' | 'planned';
  max_sol: number;
  max_date: string; // YYYY-MM-DD
  total_photos: number;
  cameras: IRoverCamera[];
}

export interface IRoversResponse {
  rovers: IRover[];
}

export interface IMarsRoverPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

export interface IMarsRoverPhotosResponse {
  photos: IMarsRoverPhoto[];
}