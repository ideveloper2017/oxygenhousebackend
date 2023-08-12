import { Column, Entity, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Sales } from './sales.entity';

@Entity('Users')
export class Users extends Model {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  is_active: boolean;

  @Column()
  role_id: number;

  @OneToMany((type) => Sales, (sales) => sales)
  sales: Sales;
}
