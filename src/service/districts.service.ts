import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { District } from '../entity/district.entity';
import { Regions } from '../entity/region.entity';
import * as fs from 'fs';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(District)
    private districtRepo: Repository<District>,
  ) {}

  getAllDistricts() {
    return this.districtRepo.find({
      relations: ['region'],
      select: ['id', 'name'],
    });
  }

  public async getSelectDistrict(id: number) {
    const region = await this.districtRepo.manager
      .getRepository(Regions)
      .findOne({ where: { id: id } })
      .then((data) => {
        return data.id;
      });
    return this.districtRepo.manager
      .getRepository(District)
      .find({ where: { region: region } });
  }

  public fillDataDistrict = async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const allDistricts = await this.districtRepo.find()
    
    if(allDistricts.length == 0){

      const fs = require('fs');
      fs.readFile('data/districts.json', (err, data) => {
        if (err) throw err;
        const districts = JSON.parse(data);
        for (const ii in districts) {
          const id = districts[ii].id;
          const region_id = districts[ii].region_id;
          const name = districts[ii].name_uz;
          this.districtRepo.save([{ id: id, region: region_id, name: name }]);
        }
      });
    };
  }
}
