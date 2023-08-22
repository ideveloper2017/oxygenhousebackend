import Model from './model.entity';
import {Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
import {Regions} from './region.entity';

@Entity('Districts')
export class District extends Model {
    @Column()
    name: string;
    @ManyToOne((type) => Regions, (region) => region.district)
    @JoinColumn({name: 'region_id'})
    region: Regions[];
}
