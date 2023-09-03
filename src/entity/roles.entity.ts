import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne } from 'typeorm';
import Model from './model.entity';
import { Permissions } from './permissions.entity';
import { Users } from './users.entity';

@Entity('Roles')
export class Roles extends Model {
  @Column()
  role_name: string;

  @Column()
  role_title: string;

  @Column()
  is_active: boolean;

  @OneToOne(type => Users, users => users.roles)
  users: Users

  @ManyToMany((type) => Permissions, (permission) => permission.roles)
  @JoinTable({ name: 'RoleHasPermission' })
  permission: Permissions[];


}
