import { Type } from 'class-transformer';
import { IsOptional, IsString, IsIn, IsDateString, IsInt, Min } from 'class-validator';

export class MarsRoverPhotosQueryDto {
  @IsOptional()
  @IsDateString()
  earth_date?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  sol?: number;

  @IsOptional()
  @IsString()
  @IsIn(['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'])
  camera?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;
}

export class MarsRoverNameParamsDto {
    @IsString()
    @IsIn(['curiosity', 'opportunity', 'spirit'])
    roverName: string;
}