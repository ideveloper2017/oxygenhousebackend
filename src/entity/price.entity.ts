import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Apartments } from './apartments.entity';

@Entity('Price')
export class Price extends Model {
  @ManyToOne((type) => Apartments, (apartments) => apartments.price)
  @JoinColumn({ name: 'apartment_id' })
  apartment_id: Apartments;

  @Column()
  apartment_price: number;

  @Column()
  is_active_price: boolean;
}
