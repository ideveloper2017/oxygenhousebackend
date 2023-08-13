import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Apartments } from './apartments.entity';

@Entity('Sale_details')
export class Sale_details extends Model {
  @ManyToOne((type) => Apartments, (apartments) => apartments.sales_details)
  @JoinColumn({ name: 'apartment_id' })
  apartment_id: Apartments[];

  @Column()
  price: number;
}
