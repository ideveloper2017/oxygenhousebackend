import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from '../entity/region.entity';
import { RegionDto } from '../dtos/region.dto';
import {District} from "../entity/district.entity";
@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions)
    private readonly regionRepository: Repository<Regions>,
  ) {}
  getAllRegion() {
    return this.regionRepository.find();
  }

  public insertRegion(regionDto: RegionDto) {
    return this.regionRepository.save(regionDto);
  }



  async fillDataRegion() {
    let regiondata;
    if (this.regionRepository.exist()) {
      regiondata = await this.regionRepository.save([
        { id: 1, name: 'Qoraqalpog‘iston Respublikasi' },
        { id: 2, name: 'Andijon viloyati' },
        { id: 3, name: 'Buxoro viloyati' },
        { id: 4, name: 'Jizzax viloyati' },
        { id: 5, name: 'Qashqadaryo viloyati' },
        { id: 6, name: 'Navoiy viloyati' },
        { id: 7, name: 'Namangan viloyati' },
        { id: 8, name: 'Samarqand viloyati' },
        { id: 9, name: 'Surxandaryo viloyati' },
        { id: 10, name: 'Sirdaryo viloyati' },
        { id: 11, name: 'Toshkent viloyati' },
        { id: 12, name: 'Farg‘ona viloyati' },
        { id: 13, name: 'Xorazm viloyati' },
        { id: 14, name: 'Toshkent shahri' },
      ]);
    }

    return regiondata;
  }
}
