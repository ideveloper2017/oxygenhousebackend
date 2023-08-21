import { ApiProperty } from "@nestjs/swagger";

export class CreateTownDto {
  @ApiProperty({example: "Oxygen", description: "turar joy nomi"})
  name: string;

  @ApiProperty({example:2, description: "joylashgan viloyati"})
  region_id: number;

  @ApiProperty({example: 4, description: "joylashgan tumani"})
  district_id: number;

  @ApiProperty({example: "Afsona 43", description: "manzili"})
  address?: string;


  @ApiProperty({example:"+998 90 222 1122"})
  contact_number?: string;
}
