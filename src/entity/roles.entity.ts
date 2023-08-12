import { Column, Entity } from 'typeorm';
import Model from './model.entity';

@Entity('Roles')
export class Roles extends Model {
  @Column()
  name: string;

  @Column()
  is_active: boolean;
}
