import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePaymentMethodDto } from 'src/dtos/payment-method-dto/create-paymeth.dto';
import { EditPaymentMethodDto } from 'src/dtos/payment-method-dto/update-paymeth.dto';
import { PaymentMethods } from 'src/entity/payment_methods.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentMethodsService {
  constructor(@InjectRepository(PaymentMethods) private readonly paymentMethodRepo: Repository<PaymentMethods>) {}

  async addPaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto) {
    let paymentMethod = new PaymentMethods()
    paymentMethod.name = createPaymentMethodDto.name;
    paymentMethod.is_active = createPaymentMethodDto.is_active

    paymentMethod = await this.paymentMethodRepo.save(paymentMethod)
    return {status: 201, data: paymentMethod, message: "To'lov turi qo'shildi"}
  }

  async getPaymentMethod(id?: number) {
    let paymentMethod
    if(id != 0){
      paymentMethod = await this.paymentMethodRepo.findOne({where: {id: id}})
    }
    else {
      paymentMethod = await this.paymentMethodRepo.find()
  
    }
    return paymentMethod
}

  async updatePaymentMethod(id: number, editPaymentMethodDto: EditPaymentMethodDto) {
    const paymentMethod = await this.paymentMethodRepo.update(id, editPaymentMethodDto)

    return paymentMethod
  }

  async deletePaymentMethod(arrayOfId: number[]){
    for(let id of arrayOfId) {
      await this.paymentMethodRepo.delete({id: +id})
    }
      return {status: 200, message: "To'lov turi o'chirildi!"}
  }
  
  
  
  
}
