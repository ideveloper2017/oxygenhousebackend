import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
	@ApiProperty({ example: 'azimkhoja', description: 'user display name' })
	@IsString()
	@IsNotEmpty()
	user_displayname: string;
	@ApiProperty({ example: 'azimxoja@gmail.com', description: 'user email' })
	@IsString()
	@IsNotEmpty()
	user_email: string;
	@ApiProperty({ example: 'user', description: 'role of users' })
	@IsString()
	@IsNotEmpty()
	user_role: string;
	@ApiProperty({ example: 'process', description: 'user status' })
	@IsString()
	@IsNotEmpty()
	user_is_verified: string;
}
