import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class CreateTownDto {
  @IsString()
  @ApiProperty({ example: 'Oxygen', description: 'turar joy nomi' })
  name: string;

  @ApiProperty({ example: 2, description: 'joylashgan viloyati' })
  region_id: number;

  @ApiProperty({ example: 4, description: 'joylashgan tumani' })
  district_id: number;

  @IsString()
  @ApiProperty({ example: 'Afsona 43', description: 'manzili' })
  address?: string;

  @IsString()
  @ApiProperty({ example: '+998 90 222 1122' })
  contact_number?: string;
}
