import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../dtos/user-dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userService.signIn(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { username: user, sub: user.id };
    return {
      payload,
      // access_token: await this.jwtService.signAsync(payload),
    };
  }

  public async register(user: CreateUserDto): Promise<any> {
    return this.userService.createLogin(user);
  }
}
