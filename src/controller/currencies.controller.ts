import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCurrencyDto } from 'src/dtos/currency-dto/create-currency.dto';
import { CurrenciesService } from 'src/service/currencies.service';

@ApiTags('Currencies')
@Controller('currency')
export class CurrenciesController {
  constructor(private readonly currancyService: CurrenciesService) {}

  @ApiOperation({summary: "Pul birligi qo'shish"})
  @Post('/add')
  addCurrency(@Body() createCurrencyDto: CreateCurrencyDto){
      return this.currancyService.createCurrency(createCurrencyDto)
  }

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
