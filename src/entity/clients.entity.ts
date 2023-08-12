import { Column, Entity, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Sales } from './sales.entity';

@Entity('Clients')
export class Clients extends Model {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  middle_name: string;

  @Column()
  address: string;

  @Column()
  contact_number: string;

  @OneToMany((type) => Sales, (sales) => sales)
  sales: Sales[];
}
