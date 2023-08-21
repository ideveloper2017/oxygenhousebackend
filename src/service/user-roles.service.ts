import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserRolesService {
  constructor(private readonly dataSource: DataSource) {}
}

