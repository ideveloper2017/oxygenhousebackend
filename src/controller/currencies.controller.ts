import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CurrenciesService } from 'src/service/currencies.service';

@Controller('currency')
export class CurrenciesController {
  constructor(private readonly currancyService: CurrenciesService) {}

  @ApiOperation({ summary: "Pul birliklari ro'yxatini olish" })
  @Get('/list')
  viewCurrancies() {
    return this.currancyService.getCurrencies();
  }

  @ApiOperation({ summary: 'Pul birligini belgilash' })
  @Patch('/option')
  selectCurrency(@Body() currency: number[]) {
    return this.currancyService.selectCurrency(currency);
  }
}
