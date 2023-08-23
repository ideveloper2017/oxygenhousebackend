import { ApiProperty } from '@nestjs/swagger';
import { Towns } from 'src/entity/town.entity';

export class CreateBuildingDto {
  @ApiProperty({
    example: 'Nest One buidings-1',
    description: 'bino nomi kiritiladi.',
  })
  name: string;

  @ApiProperty({
    example: 2,
    description: 'binodagi podyezdlar soni kiritiladi.',
  })
  entrance_number: number;

  @ApiProperty({ example: 5, description: 'bino qavatlari soni kiritiladi.' })
  floor_number: number;

  @ApiProperty({
    example: 4,
    description: 'qavatlardagi xonadonlar soni kiritiladi.',
  })
  apartment_number: number;

  @ApiProperty({ example: 2, description: 'turar joy majmuasi id kiritiladi.' })
  town_id: number;

  @ApiProperty({
    example: 7500000,
    description: 'kvadrat metr narxi kiritiladi.',
  })
  mk_price: number;
}
