import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class SaleDetailsService {
  constructor(private readonly dataSource: DataSource) {}
}
