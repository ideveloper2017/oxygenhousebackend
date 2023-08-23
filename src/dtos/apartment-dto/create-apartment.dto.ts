import { Buildings } from 'src/entity/buildings.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty({ example: 2, description: 'bino idisini oladi' })
  building_id: Buildings;

  @ApiProperty({ example: 1 })
  entrance: number;

  @ApiProperty({ example: 1 })
  floor: number;

  @ApiProperty({ example: 4 })
  room_number: number;

  @ApiProperty({ example: 3 })
  cells: number;

  @ApiProperty({ example: 65.2 })
  room_space: number;

  @IsString()
  // @IsEnum({enum: ['free', 'sold', 'bron', 'inactive'] , description: "Xato qiymat kiritildi"})
  @ApiProperty({ example: 'free', enum: ['free', 'sold', 'bron', 'inactive'] })
  status: string;
}
