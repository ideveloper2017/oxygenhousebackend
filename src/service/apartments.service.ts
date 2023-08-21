import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { Buildings } from 'src/entity/buildings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartments)
    private readonly apartmentRepository: Repository<Apartments>,
  ) {}

  async addOneApartment(id: number, createApartmentDto: CreateApartmentDto) {
    const building = new Buildings();
    building.id = id;
    let newApartment = new Apartments();
    newApartment.building_id = building;
    newApartment.entrance = createApartmentDto.entrance;
    newApartment.floor = createApartmentDto.floor;
    newApartment.room_number = createApartmentDto.room_number;
    newApartment.cells = createApartmentDto.cells;
    newApartment.room_space = createApartmentDto.room_space;
    newApartment = await this.apartmentRepository.save(newApartment);
    return { status: 201, data: [], message: "Kvartira ro'yxatga  qo'shildi!" };
  }
}
