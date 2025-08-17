import { IsOptional, IsString, IsDateString, IsInt, Min, IsBoolean, ValidateIf } from 'class-validator';

export class ApodQueryDto {
    @ValidateIf(o => o.count === undefined && o.start_date === undefined)
    @IsOptional()
    @IsDateString()
    date?: string;

    // Start date of a date range (YYYY-MM-DD). Cannot be used with `date` or `count`.
    @ValidateIf(o => o.count === undefined && o.date === undefined)
    @IsOptional()
    @IsDateString()
    start_date?: string;

    //End date of a date range (YYYY-MM-DD). Only valid if `start_date` is provided.
    @ValidateIf(o => o.start_date !== undefined)
    @IsOptional()
    @IsDateString()
    end_date?: string;

    // Number of randomly chosen images to return. Cannot be used with `date`, `start_date` and `end_date` range. */
    @ValidateIf(o => o.date === undefined && o.start_date === undefined && o.end_date === undefined)
    @IsOptional()
    @IsInt()
    @Min(1)
    count?: number;

    //Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
    @IsOptional()
    @IsBoolean()
    thumbs?: boolean;
}