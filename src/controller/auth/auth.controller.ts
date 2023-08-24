import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { AuthService } from '../../service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../../dtos/user-dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() signDto: Record<string, any>) {
    return this.authService.signIn(signDto.username, signDto.password);
  }

  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<any> {
    return this.authService.register(user);
  }
}
