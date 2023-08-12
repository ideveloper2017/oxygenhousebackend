import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Model from './model.entity';
import { Buildings } from './buildings.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';

@Entity('Apartments')
export class Apartments extends Model {
  @ManyToOne((type) => Buildings, (building) => building.apartments)
  @JoinColumn({ name: 'building_id' })
  building_id: Buildings[];

  @Column({ nullable: true })
  rooms: number;

  @Column({ nullable: true })
  rooms_space: number;

  @OneToMany((type) => Price, (price) => price.apartments)
  price: Price[];

  @OneToMany((type) => Sale_details, (sales_details) => sales_details)
  sales_details: Sale_details[];
}
