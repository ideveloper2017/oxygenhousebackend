import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from 'typeorm';
import Model from './model.entity';
import { District } from './district.entity';
import {Users} from "./users.entity";

@Entity('Regions')
export class Regions extends Model {
  @Column()
  name: string;

  @OneToMany((type) => District, (district) => district.region)
  district: District[];


  @OneToMany((type)=>Users,(user)=>user.region)
  user: Users[];

  public toString(): string {
    return `Rectangle[width=${this.name}]`;
  }
}
