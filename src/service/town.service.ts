import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { UpdateTownDto } from 'src/dtos/town-dto/update-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TownService {
  constructor(
    @InjectRepository(Towns) private readonly townRepository: Repository<Towns>,
  ) {}

  async createTown(createTownDto: CreateTownDto) {
    const town = await this.townRepository.findOne({
      where: { name: createTownDto.name },
    });

    if (!town) {
      const newTown = await this.townRepository.save(createTownDto);
      return {
        status: 201,
        data: newTown,
        message: 'Town created successfully',
      };
    } else {
      return { status: 400, data: [], message: 'Bu nomdagi turar-joy mavjud' };
    }
  }

  async findAllTowns() {
    const towns = await this.townRepository.find({ relations: ['buildings'] });
    return towns;
  }

  async updateTown(id: number, updateTownDto: UpdateTownDto) {
    const updatedTown = await this.townRepository.update(id, updateTownDto);
    if (updatedTown.affected == 0) {
      return { status: 404, data: [], message: 'Turar-joy topilmadi!' };
    }
    return { status: 200, data: [], message: 'Turar-joy tahrirlandi!' };
  }

  async deleteTown(id: number) {
    const deletedTown = await this.townRepository.delete(id);

    if (deletedTown.affected == 0) {
      return { status: 404, data: [], message: 'Turar-joy topilmadi! ' };
    }
    return { status: 200, data: [], message: "Turar-joy o'chirildi!" };
  }
}
