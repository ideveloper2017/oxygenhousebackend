import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // parolni heshlash
  async hashedPassword(password: string) {
    return bcryptjs.hashSync(password, 7);
  }

  // Parolni solishtirib koradigan method
  async comparePassword(newPassword: string, oldPassword: string) {
    return bcryptjs.compareSync(newPassword, oldPassword);
  }

  // token generatsiya qiladigan method
  async generateToken(id: UUID) {
    const payload = {
      id: id,
    };
    return this.jwtService.sign(payload);
  }
}
