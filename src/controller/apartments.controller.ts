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
import { Buildings } from '../entity/buildings.entity';
import { Response } from 'express';
import { Apartments } from 'src/entity/apartments.entity';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @ApiOperation({ summary: "Binoga xonadon qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Kvartira muvaffaqiyatli qo'shildi!",
  })
  @Post('/new/:building_id')
  createApartment(
    @Param('building_id') building_id: number,
    @Body() createApartmentDto: CreateApartmentDto,
  ) {
    return this.apartmentsService.addOneApartment(building_id, createApartmentDto);
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
    return this.apartmentsService.deleteApartment(id);
  }

  @ApiOperation({summary: "Bitta binodagi barcha kvartiralar"})
  @Get('/apartment/:building_id')
  public getApartments(
    @Param('building_id', ParseIntPipe) building_id: number,res: Response
  ) {

    return this.apartmentsService.getApartmentsByOrder(building_id)
    .then((data) => {
      
      let arr = []

      for(let i of data){
        if(arr[i.entrance]){
          arr[i.entrance].push(i)

        }else {
          arr[i.entrance] = [i]
        }
      }
      let test = Object.keys(arr).filter(Number).map(Number) // arraydagi elementlarni number tipiga o'tkazadi numeric bo'lmaganlarini tashlab ketadi.
      arr =  arr.filter(Boolean) 
    
        
       return arr
    }).catch((error) => {
      console.log(error);
    })
     }
}
