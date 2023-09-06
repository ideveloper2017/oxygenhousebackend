import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entrance } from '../entity/entrance.entity';
import { Floor } from '../entity/floor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FloorsService {
  constructor(
    @InjectRepository(Floor)
    private readonly floorRepository: Repository<Floor>,
  ) {}

  async addFloor(entrance_id: number) {
    // qavatlar tablitsasidagi entrancega tegishli qavatlarni oxirgisini chiqaradi
    const lastFloor = await this.floorRepository
      .createQueryBuilder('floor')
      .where('entrance_id = :entrance_id', { entrance_id })
      .orderBy('id', 'DESC')
      .getOne();

    // quyida yangi floor qo'shish kodi

    const newFloor = new Floor();
    newFloor.floor_number = lastFloor ? lastFloor.floor_number + 1 : 1;
    newFloor.entrance_id = entrance_id;

    const result = await this.floorRepository.save(newFloor);
    return result;
  }

  async getFloorOfEntrance(entrance_id: number) {
    const floors = await this.floorRepository.find({
      where: { entrance_id: entrance_id },
    });

    return floors;
  }
}
