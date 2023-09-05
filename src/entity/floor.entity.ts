import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Apartments } from "./apartments.entity";
import { Entrance } from "./entrance.entity";


@Entity('Floor')
export class Floor extends Model {
    @Column({})
    floor_number: number;

    @ManyToOne(type=>Entrance,(entrance)=>entrance.floors, {onDelete: 'CASCADE'})
    @JoinColumn({name:"entrance_id"})
    entrance:Entrance;

    @Column()
    entrance_id: number
    
    @OneToMany((type)=>Apartments,(apartment)=>apartment.floor)
    apartments:Apartments[];
    
}