import {Column, Entity} from 'typeorm';
import Model from './model.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payment_Methods')
@Entity('PaymentMethods')
export class PaymentMethods extends Model {
    @Column({unique: true})
    name: string;
    
    @Column()
    is_active: boolean;

}