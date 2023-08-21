import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegionDto {
  @ApiProperty()
  @IsString()
  name: string;
}
