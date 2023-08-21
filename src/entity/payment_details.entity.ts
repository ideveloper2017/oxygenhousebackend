import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Sale_details } from './sale_details.entity';

@Entity('Payment_Details')
export class Payment_Details extends Model {
  @ManyToOne((type) => Sale_details)
  @JoinColumn({ name: 'sale_details_id' })
  @Column()
  paid: number;
  @Column()
  in_cash: number;
  @Column()
  by_card: number;
}
