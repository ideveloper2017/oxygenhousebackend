import {Column, Entity, OneToMany} from 'typeorm';
import Model from './model.entity';
import {Sales} from './sales.entity';
import { Orders } from './orders.entity';

@Entity('Clients')
export class Clients extends Model {
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    middle_name: string;

    @Column({enum: ['male', 'female']})
    gender: string;

    @Column({enum: ['jismoniy', 'yuridik']})
    type: string;

    @Column()
    address: string;

    @Column({unique: true})
    contact_number: string;

    @Column({nullable: true})
    date_of_birth: Date;

    @Column({nullable: false, unique: true})
    passport_seria: string;

    @Column({nullable: false})
    given_from: string;

    @Column({nullable: true})
    given_date: Date;

    @Column({nullable: true})
    untill_date: Date;

    @Column({nullable: true})
    legal_address: string;

    @Column({nullable: true})
    registered_address: string;

    @Column({nullable: true})
    description: string;

    @OneToMany((type) => Sales, (sales) => sales.clients)
    sales: Sales[];

    @OneToMany((type) => Orders, (orders) => orders.clients)
    orders: Orders[];
}
