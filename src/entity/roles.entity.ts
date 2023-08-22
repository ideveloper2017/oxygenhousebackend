import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import Model from './model.entity';
import { Permissions } from './permissions.entity';

@Entity('Roles')
export class Roles extends Model {
  @Column()
  role_name: string;

  @Column()
  role_title: string;

  @Column()
  is_active: boolean;

  @ManyToMany((type) => Permissions, (permission) => permission.roles)
  @JoinTable({ name: 'RoleHasPermission' })
  permission: Permissions[];


}
