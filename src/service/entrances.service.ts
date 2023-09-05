import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Buildings } from 'src/entity/buildings.entity';
import { Entrance } from 'src/entity/entrance.entity';
import { Repository } from 'typeorm';


@Injectable()
export class EntrancesService {
    constructor(@InjectRepository(Entrance) private readonly entanceRepo: Repository<Entrance>){}

    async addEntrance(building_id: number) {
        const lastEntrance = await this.entanceRepo.createQueryBuilder('entrances')
        .where('building_id = :building_id', {building_id})
        .orderBy('id','DESC')
        .getOne()  // entrance tablitsasidagi binoga tegishli entrancelarni oxirgisini chiqaradi

        // quyida yangi entrance qo'shish kodi
        const newEntrance = new Entrance()
        newEntrance.entrance_number = lastEntrance? lastEntrance.entrance_number+1 : 1
        newEntrance.building_id = await building_id
        let res = await this.entanceRepo.save(newEntrance)

        return res
    }
    async getEntranceOfBuilding(building_id: number){
        const entrances = await this.entanceRepo.find({where: {building_id: building_id}})
        
        return entrances
    }
    
    async deleteEmptyEnrances(id: number) {
        const del = await this.entanceRepo.findOne({where: {id: id}, relations:['floors']})
        let res
        if(!del.floors.length){
             res = await this.entanceRepo.delete(id)
        }else {
            res = {message: "o'chirib bo'lmaydi"}
        }
        return res
    }
}


