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

  async addOneApartment(building_id: number, createApartmentDto: CreateApartmentDto) {
    const building = new Buildings();
    building.id = building_id;
    let newApartment = new Apartments();
    newApartment.room_number = createApartmentDto.room_number;
    newApartment.cells = createApartmentDto.cells;
    newApartment.room_space = createApartmentDto.room_space;

    return await this.apartmentRepository.save(newApartment);
  }

  // async updateApartment(id: number, updateApartmentDto: UpdateApartmentDto) {
  //   const editedApartment = await this.apartmentRepository.update(
  //     { id: id },
  //     updateApartmentDto,
  //   );
  //   if (editedApartment.affected == 0) {
  //     return { status: 404, message: 'Kvartira topilmadi' };
  //   }
  //   return { status: 200, message: 'Kvartira tahrirlandi' };
  // }

  async deleteApartment(id: number) {
    const deletedApartment = await this.apartmentRepository.delete(id);

    if (deletedApartment.affected != 0) {
      return { status: 200, message: "Kvartira o'chirildi" };
    }
    return { status: 404, message: 'Kvartira topilmadi' };
  }
  
  async getApartmentsByOrder(building_id : number) {

    const apartments = await this.apartmentRepository
    .createQueryBuilder('apartments')
    .select()
    .where('building_id = :building_id', {building_id})
    .getMany()
    
    return  apartments
  }
}
