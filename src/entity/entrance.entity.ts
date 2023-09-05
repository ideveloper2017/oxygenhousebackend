import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Model from "./model.entity";
import { Buildings } from "./buildings.entity";
import { Floor } from "./floor.entity";

@Entity('Entrances')
export class Entrance extends Model{

    @Column({})
    entrance_number : number;

    @ManyToOne(type => Buildings, building => building.entrances)
    @JoinColumn({name: "building_id"})
    buildings: Buildings

    @Column()
    building_id: number

    @OneToMany(type => Floor, floor => floor.entrance,{onDelete: 'CASCADE'})
    floors: Floor[]
}