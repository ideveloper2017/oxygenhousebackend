import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { ApartmentsService } from 'src/service/apartments.service';
import { Response } from 'express';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @ApiOperation({ summary: "Binoga xonadon qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Kvartira muvaffaqiyatli qo'shildi!",
  })
  @Post('/new/:floor_id')
  createApartment(
    @Param('floor_id') floor_id: number,
    @Body() createApartmentDto: CreateApartmentDto,
  ) {
    return this.apartmentsService.addOneApartment(floor_id, createApartmentDto);
  }

  @ApiOperation({ summary: 'Kvartira tahrirlash' })
  @ApiResponse({ status: 200, description: 'Kvartira tahrirlandi' })
  @Patch('/edit/:id')
  updateApartment(
    @Param('id') id: number,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return this.apartmentsService.updateApartment(id, updateApartmentDto);
  }

  @ApiOperation({ summary: "Kvartirani ro'yxatdan o'chirish" })
  @ApiResponse({ status: 200, description: "Kvartira o'chilidi" })
  @Delete('/delete/:id')
  deleteApartment(@Param('id') id: number) {
    return this.apartmentsService.deleteApartment(id).then(data => {
      if(data.affected != 0) {
        return {success: true, message: "Apartment deleted"}
      }else {
        return {success: false, message: "error while deleting"}
      }
    })
  }

  @Get('/:id')
  apartmentInfo(@Param('id') id:number){
    return this.apartmentsService.apartmentFullInfo(id).then( data => {
      if(data){
        return {success: true, data, message: "Apartment info fetched"}
      }else {
        return {success: false, message: "error while fetching apartment info"}
      }
    })
  }
}
