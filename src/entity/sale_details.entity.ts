import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Apartments } from './apartments.entity';

@Entity('Sale_details')
export class Sale_details extends Model {
  @ManyToOne((type) => Apartments, (apartments) => apartments.id)
  @JoinColumn({ name: 'apartment_id' })
  apartments: Apartments[]

  @Column()
  price: number;
}
