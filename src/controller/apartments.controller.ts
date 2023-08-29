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
    let enterance = 0;
    let floor = 0;
    let room_number = 0;

    const enterance_array = [];
    const floor_array = [];
    const room_array = [];
    let entrace_res;
    const floor_res = [];
    const room_res = [];
    const response = [];

    return this.apartmentsService
      .getApartments(building_id)
      .then((data) => {
        data.forEach((res, k) => {
          if (res.entrance !== enterance) {
            enterance = res.entrance;
            enterance_array.push(enterance);
          }

          if (res.floor !== floor) {
            floor = res.floor;
            floor_array.push(floor);
          }

          if (res.room_number !== room_number) {
            room_number = res.room_number;
            room_array.push(room_number);
          }
          // entranceData.push({
          //   enterance,
          //   floor: floor,
          //   room: { room: res.room_number },
          // });
          // // response_array.push(dataarray);
          // response_array.push(entranceData);
        });

        enterance_array.forEach((entraceData, k) => {
          entrace_res = entraceData;
          floor_array.forEach((floorData, i) => {
            console.log(floorData);
            // room_res.push(roomData);
          });
          // floor_res.push({ floor_num: floorData, apart: room_res });
          // response.push({
          //   entrance: entrace_res,
          //   floor: floor_res,
          // });
          // });
        });

        return JSON.stringify({ data: response });
      })
      .catch((error) => {
        console.log({
          succes: false,
          message: error.message,
        });
      });
  }
}
