import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceService } from 'src/service/price.service';

@ApiTags('Price')
@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}
}
