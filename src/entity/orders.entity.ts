import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Model from "./model.entity";
import { Clients } from "./clients.entity";
import { Users } from "./users.entity";

@Entity('Orders')
export class Orders extends Model {
    @ManyToOne(type => Clients, (clients) => clients.orders)
    @JoinColumn({name: 'client_id'})
    clients: Clients;

    @Column({type: "integer"})
    client_id: number
    
    @ManyToOne(type => Users, (users) => users.orders)
    @JoinColumn({name: 'user_id'})
    users: Users
    
    @Column({type: "integer"})
    user_id: number

    @Column()
    is_accepted: boolean
    

}