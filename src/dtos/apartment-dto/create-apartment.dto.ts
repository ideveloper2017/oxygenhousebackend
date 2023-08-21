import { Buildings } from 'src/entity/buildings.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {

  @ApiProperty()
  building_id: Buildings;

  @ApiProperty()
  entrance: number;

  @ApiProperty()
  floor: number;

  @ApiProperty()
  room_number: number;

  @ApiProperty()
  cells: number;

  @ApiProperty()
  room_space: number;
}


