import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currencies } from 'src/entity/currencies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrenciesService {

    constructor(@InjectRepository(Currencies) private readonly currencyRepo: Repository<Currencies>) {}

    async getCurrencies() {
        const currencies = await this.currencyRepo.find()
        return {status: 200, data: currencies, message: 'Success'} 
    }

    async selectCurrency(arrayOfId: number[] ) {
        for (let id of arrayOfId) {
           await this.currencyRepo.update({id: id},{is_selected: true}) 
        }
        return {status: 200, data:[], message: 'Success'}
    }

}
