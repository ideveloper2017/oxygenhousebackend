import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Apartments } from './apartments.entity';
import { Towns } from './town.entity';

@Entity('Buildings')
export class Buildings extends Model {
  
  @ManyToOne( type => Towns, town => town.buildings)
  @JoinColumn({name: 'res_town_id', referencedColumnName:'id'})
  town: Towns

  @Column()
  name: string;

  @Column()
  entrance_number: number;

  @Column()
  floor_number: number;

  @OneToMany((type) => Apartments, (apartment) => apartment.building_id)
  apartments: Apartments[];
  
  @Column() 
  apartment_number: number
}
