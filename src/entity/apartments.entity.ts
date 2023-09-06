import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Price } from './price.entity';
import { Sale_details } from './sale_details.entity';
import { Floor } from './floor.entity';

@Entity('Apartments')
export class Apartments extends Model {
  @ManyToOne((type) => Floor, (floor) => floor.apartments)
  @JoinColumn({ name: 'floor_id' })
  floor: Floor;

  @Column()
  floor_id: number;

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
