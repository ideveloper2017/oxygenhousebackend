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
    console.time();

    const town = new Towns();
    town.id = createBuildingDto.town_id;

    let building = new Buildings();
    building.name = createBuildingDto.name;
    building.town_id = town;
    building.entrance_number = createBuildingDto.entrance_number;
    building.floor_number = createBuildingDto.floor_number;
    building.apartment_number = createBuildingDto.apartment_number;
    building.mk_price = createBuildingDto.mk_price;

    building = await this.buildingRepository.save(building);
    console.log(building);

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
          apartment.room_space = 58.5;

          records.push(apartment);
        }
      }
    }
    const result = await this.buildingRepository.manager
      .getRepository(Apartments)
      .save(records);
    //   let apartment_prices = []
    //   result.forEach((record) => {
    //   const price = new Price()
    //   price.apartment_id = record.id
    //   price.is_active_price = true
    //   price.apartment_price = createBuildingDto.price
    //   apartment_prices.push(price);

    // })
    // await this.buildingRepository.manager.getRepository(Price).save(apartment_prices)

    console.timeEnd();
    return result;
  }
  async findAllBuildings() {
    const result = await this.buildingRepository.find();
    return result;
  }
}
