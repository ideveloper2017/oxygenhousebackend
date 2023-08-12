import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PriceService {
  constructor(private readonly dataSource: DataSource) {}
}
