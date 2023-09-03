import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePaymentMethodDto } from 'src/dtos/payment-method-dto/create-paymeth.dto';
import { EditPaymentMethodDto } from 'src/dtos/payment-method-dto/update-paymeth.dto';
import { PaymentMethodsService } from 'src/service/payment_methods.service';

@ApiTags('PaymentMethods')
@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}
  
    @ApiOperation({summary: 'Pul birligini qoshish'})
    @Post('/add')
    createPaymentMethod(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
      return this.paymentMethodsService.addPaymentMethod(createPaymentMethodDto)
    }
    
    @ApiOperation({summary: "Pul birligini o'chirish",})
    @Post('/delete')
    deletePaymentMethod(@Body() id:number[]) {
      return this.paymentMethodsService.deletePaymentMethod(id)
    }
    

    @ApiOperation({summary: "Pul birligini olish"})
    @Get('/:id')
    getPaymentMethod(@Param('id') id?: number) {
      return this.paymentMethodsService.getPaymentMethod(id)
    }

    @ApiOperation({summary: "Pul birligini tahrirlash"})
    @Patch('/edit/:id')
    editPaymentMethod(@Param('id') id: number, @Body() editPaymentMethod: EditPaymentMethodDto){
      return this.paymentMethodsService.updatePaymentMethod(id, editPaymentMethod)
    }

  }
