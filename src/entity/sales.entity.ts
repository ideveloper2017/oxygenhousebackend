import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Clients } from './clients.entity';
import { Users } from './users.entity';

@Entity('Sales')
export class Sales extends Model {
  @ManyToOne((type) => Users)
  @JoinColumn({name: 'user_id'})
  user: Users[];

  @ManyToOne((type) => Clients)
  @JoinColumn({name: 'client_id'})
  client: Clients[];

  @Column()
  total_price: number;

  @Column()
  qty: number;
}
