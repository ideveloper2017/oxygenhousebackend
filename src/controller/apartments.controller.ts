import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateApartmentDto } from 'src/dtos/apartment-dto/create-apartment.dto';
import { UpdateApartmentDto } from 'src/dtos/apartment-dto/update-apartment.dto';
import { ApartmentsService } from 'src/service/apartments.service';
import { Buildings } from '../entity/buildings.entity';

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
    @Param('building_id', ParseIntPipe) building_id: number,
  ) {
    let floor = 0;
    let enterance = 0;
    let key1 = 0;
    let key2 = 0;
    const dataarray = [];
    const enterancearray = [];
    return this.apartmentsService
      .getApartments(building_id)
      .then((data) => {
        data.map((data, key) => {
          if (enterance !== data.entrance) {
            key1 += 1;
            enterancearray[key1] = {
              enterance: data.entrance,
            };
            if (floor !== data.floor) {
              key2 += 1;
              dataarray[key2] = { enterance: enterancearray, floor: floor };
            }
            floor = data.floor;
            enterance = data.entrance;
          }
        });
        console.log(JSON.stringify({ data: enterancearray }));
        // return res.send({
        //   succes: true,
        //   data: data,
        //   message: 'Found records!!!',
        // });
        // .status(200)
        // .send({ succes: true, data: data, message: 'Found records!!!' }); // data.map((data) => {
        // if (!data) {
        //   res
        //     .status(200)
        //     .send({ succes: true, data: data, message: 'Found records!!!' });
        // } else {
        //   res.status(401).send({
        //     succes: false,
        //     data: null,
        //     message: 'Not found records!!!',
        //   });
        // }
        // });
      })
      .catch((error) => {
        console.log({
          succes: false,
          message: error.message,
        });
        // res.send({
        //   succes: false,
        //   message: error.message,
        // });
      });
  }
}
