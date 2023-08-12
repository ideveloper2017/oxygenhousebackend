import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(private readonly dataSource: DataSource) {}
}
