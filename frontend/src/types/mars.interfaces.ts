export interface IRover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface ICamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface IMarsState {
    photos: IMarsRoverPhoto[];
    loading: boolean;
    error: null;
    page: number;
    hasMore: boolean;
    fetchRovers: (query: IMarsRoverPhotosQuery) => Promise<void>;
    fetchNextPage: (query: IMarsRoverPhotosQuery) => Promise<void>;
}

export type TRoverName = 'curiosity' | 'opportunity' | 'spirit';

export interface IMarsRoverPhoto {
  id: number;
  sol: number;
  camera: ICamera;
  img_src: string;
  earth_date: string;
  rover: IRover;
}

export interface IMarsRoverPhotosQuery {
    roverName: TRoverName;
    earth_date?: string;
    sol?: number;
    camera?:
    | "FHAZ"
    | "RHAZ"
    | "MAST"
    | "CHEMCAM"
    | "MAHLI"
    | "MARDI"
    | "NAVCAM"
    | "PANCAM"
    | "MINITES";
    page?: number;
}