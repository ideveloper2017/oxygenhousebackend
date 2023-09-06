import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { Clients } from './clients.entity';
import { Users } from './users.entity';

@Entity('Sales')
export class Sales extends Model {
  @ManyToOne((type) => Users, users => users.sales)
  @JoinColumn({ name: 'user_id' })
  users: Users;

  @Column()
  user_id: number

  @ManyToOne((type) => Clients, clients => clients.sales)
  @JoinColumn({ name: 'client_id' })
  clients: Clients;

  @Column()
  client_id: number

  @Column()
  total_price: number;

  @Column()
  qty: number;
}
