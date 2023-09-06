import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Towns } from 'src/entity/town.entity';
import { Apartments } from 'src/entity/apartments.entity';
import { Floor } from 'src/entity/floor.entity';
import { Entrance } from 'src/entity/entrance.entity';
import { UpdateBuildingDto } from 'src/dtos/building-dto/update-building.dto';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Buildings)
    private readonly buildingRepository: Repository<Buildings>,
  ) {}

  async createBuilding(createBuildingDto: CreateBuildingDto) {

    let building = new Buildings();
    building.name = createBuildingDto.name;
    building.town_id = createBuildingDto.town_id
    building.entrance_number = createBuildingDto.entrance_number;
    building.floor_number = createBuildingDto.floor_number;
    building.apartment_number = createBuildingDto.apartment_number;
    building.mk_price = createBuildingDto.mk_price;

    building = await this.buildingRepository.save(building);
    console.log(building);

    let kv = 1;
    const records = [];
    for (let blok = 1; blok <= building.entrance_number; blok++) {
      
      const entrance = new Entrance()
      entrance.buildings = building
      entrance.entrance_number = blok
      await this.buildingRepository.manager.getRepository(Entrance).save(entrance)

      for (let layer = 1; layer <= building.floor_number; layer++) { 
        
        const floor = new Floor()
        floor.floor_number = layer
        floor.entrance = entrance
        await this.buildingRepository.manager.getRepository(Floor).save(floor) 

        for (let apartment = 1; apartment <= building.apartment_number; apartment++) {
          const apartment = new Apartments();
          apartment.floor = floor
          apartment.room_number = kv++;
          apartment.cells = 1
          apartment.status = 'free'
          apartment.room_space = 58;
          records.push(apartment);
        }
      }
    }
    const result = await this.buildingRepository.manager.getRepository(Apartments)
      .save(records);

      return result;
    }
    async findAllBuildings() {
      const result = await this.buildingRepository.find({relations: ['entrances' , 'entrances.floors','entrances.floors.apartments' ]});
    return result;
  }

  public async getBuilding(id: number) {
    return await this.buildingRepository.find({
      where: { id: id },
    });
  }

  async updateBuilding(id: number, updateBuildingDto: UpdateBuildingDto){
    const building = await this.buildingRepository.update({id:id}, updateBuildingDto)

    return building
  }

  async deleteBuilding(id: number) {

    const result = await this.buildingRepository.delete(id);
    return result
  }

  async getBuldingsOfTown(town_id: number) {
    const result = await this.buildingRepository.createQueryBuilder('buildings').select().where('town_id = :town_id',{town_id})
    .getMany()
    

    return result
  }
  
}
