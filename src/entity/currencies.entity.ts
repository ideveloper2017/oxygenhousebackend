import {Column, Entity} from 'typeorm';
import Model from './model.entity';

@Entity('Currencies')
export class Currencies extends Model {
    
    @Column({unique: true})
    name: string;

    @Column()
    is_selected: boolean;
}
