import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { Buildings } from 'src/entity/buildings.entity';
import { FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartments)
    private readonly apartmentRepository: Repository<Apartments>,
  ) {}

  async addOneApartment(id: number, createApartmentDto: CreateApartmentDto) {
    const building = new Buildings();
    building[0].id = id;
    const newApartment = new Apartments();
    newApartment.building_id = building;
    newApartment.entrance = createApartmentDto.entrance;
    newApartment.floor = createApartmentDto.floor;
    newApartment.room_number = createApartmentDto.room_number;
    newApartment.cells = createApartmentDto.cells;
    newApartment.room_space = createApartmentDto.room_space;

    return await this.apartmentRepository.save(newApartment);
  }

  async updateApartment(id: number, updateApartmentDto: UpdateApartmentDto) {
    const editedApartment = await this.apartmentRepository.update(
      { id: id },
      updateApartmentDto,
    );
    if (editedApartment.affected == 0) {
      return { status: 404, message: 'Kvartira topilmadi' };
    }
    return { status: 200, message: 'Kvartira tahrirlandi' };
  }

  async deleteApartment(id: number) {
    const deletedApartment = await this.apartmentRepository.delete(id);

    if (deletedApartment.affected != 0) {
      return { status: 200, message: "Kvartira o'chirildi" };
    }
    return { status: 404, message: 'Kvartira topilmadi' };
  }

  public async getApartments(building_id: number) {
    const building = await this.apartmentRepository.manager
      .getRepository(Buildings)
      .findOne({ where: { id: building_id } });
    //where: { building_id: building as FindOptionsWhere<Buildings> },

    return await this.apartmentRepository.find({});
  }
}
