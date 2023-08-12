import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { CreatePriceDto } from 'src/dtos/price-dto/create-price.dto';
import { Buildings } from 'src/entity/buildings.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectRepository(Buildings)
    private readonly buildingRepository: Repository<Buildings>,
  ) {}

  async createBuilding(createBuildingDto: CreateBuildingDto) {
    let buildings = [];
    let range =
      createBuildingDto.floor_number *
      createBuildingDto.apartment_number *
      createBuildingDto.entrance_number;
      
    for (let room = 1; room <= range; room++) {
      buildings.push({
        name: 'Bino1',
        entrance_number: 2,
        floor_number: 1,
        apartment_number: room,
        res_town_id: 6,
      });
    }
    await this.buildingRepository.save(buildings);
    console.log(buildings);
  }
}
