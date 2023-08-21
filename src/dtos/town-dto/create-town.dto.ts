import {ApiProperty} from "@nestjs/swagger";

export class CreateTownDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  region_id: number;
  @ApiProperty()
  district_id: number;
  @ApiProperty()
  address?: string;
  @ApiProperty()
  contact_number?: string;
  @ApiProperty()
  logo?: string;
}
