import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Model from './model.entity';
import { District } from './district.entity';

@Entity('Regions')
export class Regions extends Model {
  @Column()
  name: string;

  @OneToMany((type) => District, (district) => district.region)
  district: District[];

  public toString(): string {
    return `Rectangle[width=${this.name}]`;
  }
}
