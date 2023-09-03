import { PartialType } from "@nestjs/swagger";
import { CreatePaymentMethodDto } from "./create-paymeth.dto";

export class EditPaymentMethodDto extends PartialType(CreatePaymentMethodDto) {
    
}