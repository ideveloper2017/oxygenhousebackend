import { Column, Entity } from 'typeorm';
import Model from './model.entity';

@Entity('Payment_Methods')
export class Payment_Methods extends Model {
  @Column()
  name: string;

  @Column()
  is_active: boolean;
}
