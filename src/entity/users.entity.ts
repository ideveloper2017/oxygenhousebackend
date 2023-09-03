import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import Model from './model.entity';
import { Sales } from './sales.entity';
import { Orders } from './orders.entity';
import { Roles } from './roles.entity';

@Entity('Users')
export class Users extends Model {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({nullable: true})
  phone_number: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  is_active: boolean;

  @OneToOne(type => Roles, roles => roles.users)
  @JoinColumn({name: 'role_id'})
  roles: Roles

  @Column()
  role_id: number

  @OneToMany((type) => Sales, (sales) => sales.users)
  sales: Sales[];

  @OneToMany((type) => Orders, (orders) => orders.users)
  orders: Orders[];
}
