import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { Apartments } from 'src/entity/apartments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartments)
    private readonly apartmentRepository: Repository<Apartments>,
  ) {}

  async addOneApartment(floor_id: number, createApartmentDto: CreateApartmentDto) {
 
    let newApartment = new Apartments();
    newApartment.floor_id = floor_id
    newApartment.room_number = createApartmentDto.room_number;
    newApartment.cells = createApartmentDto.cells;
    newApartment.room_space = createApartmentDto.room_space;
    newApartment.status = createApartmentDto.status;  

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

    return deletedApartment
  }
  
  async getApartmentsOfBuilding(building_id : number) {

    const apartments = await this.apartmentRepository
    .createQueryBuilder('apartments')
    .where('building_id = :building_id', {building_id})
    .getMany()
    
    return  apartments
  }
}
