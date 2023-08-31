import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Clients } from "./clients.entity";
import { Users } from "./users.entity";

@Entity('Orders')
export class Orders extends Model {
    @ManyToOne(type => Clients, (clients) => clients.orders)
    @JoinColumn({name: 'client_id'})
    client_id: Clients

    @ManyToOne(type => Users, (users) => users.orders)
    @JoinColumn({name: 'user_id'})
    user_id: Users

    @Column()
    is_accepted: boolean
    

}