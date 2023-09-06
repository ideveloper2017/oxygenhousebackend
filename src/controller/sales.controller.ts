import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SalesService } from '../service/sales.service';

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}
}
