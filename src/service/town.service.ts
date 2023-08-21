import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TownService {
  constructor(
    @InjectRepository(Towns) private readonly townRepository: Repository<Towns>,
  ) {}

  async createTown(createTownDto: CreateTownDto) {
    const town = await this.townRepository.findBy({ name: createTownDto.name });
    if (town.length != 0) {
      return { status: 200, data: [], message: 'Bu nomdagi turar-joy mavjud' };
    }
    const newTown = await this.townRepository.save(createTownDto);
    return { status: 201, data: newTown, message: 'Town created successfully' };
  }

  async findAllTowns() {
    const towns = await this.townRepository.find();
    return towns;
  }
}
