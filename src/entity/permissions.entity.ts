import Model from './model.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Roles } from './roles.entity';

@Entity('Permissions')
export class Permissions extends Model {
  @Column()
  name: string;

  @ManyToMany((type) => Roles, (role) => role.permission)
  roles: Roles[];
}
