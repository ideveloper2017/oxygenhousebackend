import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Buildings } from './buildings.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';

@Entity('Apartments')
export class Apartments extends Model {
  @ManyToOne((type) => Buildings, (building) => building.apartments)
  @JoinColumn({ name: 'building_id' })
  building_id: Buildings;

  @Column()
  entrance: number;

  @Column()
  floor: number;

  @Column({ nullable: true })
  room_number: number;

  @Column({ nullable: true })
  cells: number;

  @Column({ nullable: true })
  room_space: number;

  @Column({ enum: ['free', 'sold', 'bron', 'inactive'], nullable: true })
  status: string;

  @OneToMany((type) => Price, (price) => price.apartment_id)
  price: Price[];

  @OneToMany(
    (type) => Sale_details,
    (sales_details) => sales_details.apartment_id,
  )
  sales_details: Sale_details[];
}
