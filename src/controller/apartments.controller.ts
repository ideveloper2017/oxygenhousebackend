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
  @Post('/new/:id')
  createApartment(
    @Param('id') id: number,
    @Body() createApartmentDto: CreateApartmentDto,
  ) {
    return this.apartmentsService.addOneApartment(id, createApartmentDto);
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
  @Get('/apartment/:building_id')
  public getApartments(
    @Param('building_id', ParseIntPipe) building_id: number,
  ) {
    const floor = 1;
    const dataarray = [];
    return this.apartmentsService
      .getApartments(building_id)
      .then((data) => {
        data.map((data, key: number) => {
          // if (floor != data.floor) {
          //   floor = data.floor;
          //   dataarray['floor'] = data;
          // } else {
          dataarray[key]['floor'] = data;
          // }
        });
        console.log(JSON.stringify({ data: dataarray }));
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
        // res.send({
        //   succes: false,
        //   message: error.message,
        // });
      });
  }
}
