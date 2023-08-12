import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SaleDetailsService } from 'src/service/sale_details.service';

@ApiTags('SalesDetails')
@Controller('sale-details')
export class SaleDetailsController {
  constructor(private readonly saleDetailsService: SaleDetailsService) {}
}
