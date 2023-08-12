import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class SalesService {
  constructor(private readonly dataSource: DataSource) {}
}
