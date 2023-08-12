import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PaymentMethodsService {
  constructor(private readonly dataSource: DataSource) {}
}
