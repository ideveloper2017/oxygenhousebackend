import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(private readonly dataSource: DataSource) {}
}
