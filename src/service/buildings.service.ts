import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Towns } from 'src/entity/town.entity';
import { Apartments } from 'src/entity/apartments.entity';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Buildings)
    private readonly buildingRepository: Repository<Buildings>,
  ) {}

  async createBuilding(createBuildingDto: CreateBuildingDto) {
    const town = [new Towns()];
    town[0].id = createBuildingDto.town_id;
    let building = [new Buildings()];
    building[0].name = createBuildingDto.name;
    building[0].town_id = town;
    building[0].entrance_number = createBuildingDto.entrance_number;
    building[0].floor_number = createBuildingDto.floor_number;
    building[0].apartment_number = createBuildingDto.apartment_number;
    building[0].mk_price = createBuildingDto.mk_price;

    building = await this.buildingRepository.save(building);

    let kv = 1;
    const records = [];
    for (
      let entrance = 1;
      entrance <= createBuildingDto.entrance_number;
      entrance++
    ) {
      for (let floor = 1; floor <= createBuildingDto.floor_number; floor++) {
        for (
          let apartment = 1;
          apartment <= createBuildingDto.apartment_number;
          apartment++
        ) {
          const apartment = new Apartments();
          apartment.building_id = building;
          apartment.entrance = entrance;
          apartment.floor = floor;
          apartment.room_number = kv++;
          apartment.room_space = 58;

          records.push(apartment);
        }
      }
    }
    const result = await this.buildingRepository.manager
      .getRepository(Apartments)
      .save(records);

    console.log(records);
    return result;
  }
  async findAllBuildings() {
    const result = await this.buildingRepository.find({
      relations: ['apartments'],
    });
    return result;
  }

  public async getBuilding(id: number) {
    return this.buildingRepository.find({
      where: { id: id },
      relations: ['apartments'],
    });
  }

  async deleteBuilding(id: number) {
    const result = await this.buildingRepository.delete(id);

    if (result.affected != 0) {
      return { status: 200, data: [], message: "Bino o'chirildi" };
    }
    return { status: 404, data: [], message: 'Bino topilmadi' };
  }
}
