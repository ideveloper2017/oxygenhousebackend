import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ example: 'Jhonson', description: 'clients firstname ' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'McCandy', description: 'clients lastname ' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsString()
  middle_name: string;

  gender: string = 'male' || 'female';

  type: string = 'jismoniy' || 'yuridik';

  @ApiProperty({
    example: 'Orlando Mallway street A4',
    description: 'clients address ',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: '+998 90 112 2442',
    description: 'clients contact number ',
  })
  @IsString()
  contact_number: string;

  date_of_birth: Date;

  passport_seria: string;

  given_from: string;

  given_date: Date;

  untill_date: Date;

  legal_address: string;

  registered_address: string;

  description: string;
}
