import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

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
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
