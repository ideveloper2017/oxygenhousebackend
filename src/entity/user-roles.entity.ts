import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import Model from './model.entity';
import { Users } from './users.entity';
import { Roles } from './roles.entity';

@Entity('UserRoles')
export class UserRoles extends Model {
  @ManyToOne((type) => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @ManyToOne((type) => Roles)
  @JoinColumn({ name: 'role_id' })
  roles: Roles[];

  @Column({ default: false })
  is_active: boolean;
}
