import { Buildings } from 'src/entity/buildings.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApartmentDto {
  @ApiProperty()
  building_id: Buildings;
  @ApiProperty()
  rooms?: number;
  @ApiProperty()
  room_space?: string;
}
