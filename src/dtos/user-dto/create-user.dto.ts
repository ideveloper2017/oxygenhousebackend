import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';
export class CreateUserDto {
  // @ApiProperty({ example: 'azimkhoja', description: 'user display name' })
  // @IsString()
  // @IsNotEmpty()
  // user_displayname: string;
  // @ApiProperty({ example: 'azimxoja@gmail.com', description: 'user email' })
  // @IsString()
  // @IsNotEmpty()
  // user_email: string;
  // @ApiProperty({ example: 'user', description: 'role of users' })
  // @IsString()
  // @IsNotEmpty()
  // user_role: string;
  // @ApiProperty({ example: 'process', description: 'user status' })
  // @IsString()
  // @IsNotEmpty()
  // user_is_verified: string;

  @ApiProperty({example: "Mansurxon"})
  first_name: string;

  @ApiProperty({example: "Samadov"})
  last_name: string;

  @ApiProperty({example: "mansoor07"})
  username: string;

  @ApiProperty({example: "+998 94 995 1254"})
  phone_number: string;

  @ApiProperty({example: "1234"})
  password: string;

  @ApiProperty({example:false})
  is_active: boolean;

  @ApiProperty({example: 3})
  role_id: number;
}
