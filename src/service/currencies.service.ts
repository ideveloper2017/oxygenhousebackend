import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCurrencyDto } from 'src/dtos/currency-dto/create-currency.dto';
import { Currencies } from 'src/entity/currencies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrenciesService {
  constructor(
    @InjectRepository(Currencies)
    private readonly currencyRepo: Repository<Currencies>,
  ) {}

  async createCurrency(createCurrencyDto: CreateCurrencyDto) {
    const currency = new Currencies()
    currency.name = createCurrencyDto.name
    currency.is_selected = createCurrencyDto.is_selected

    const result = await this.currencyRepo.save(currency)
    return {status: 201, data: result, message: "Currency added successfully!"}
  }

  async getCurrencies() {
    const currencies = await this.currencyRepo.find();
    return { status: 200, data: currencies, message: 'Success' };
  }

  async selectCurrency(arrayOfId: number[]) {
    for (const id of arrayOfId) {
      await this.currencyRepo.update({ id: id }, { is_selected: true });
    }
    return { status: 200, data: [], message: 'Success' };
  }
}
