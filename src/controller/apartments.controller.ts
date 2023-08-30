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
    const enterance = 0;
    const floor = 0;
    const room_number = 0;
    const floor_number = 0;
    const enterance_array = [];
    const floor_array = [];
    const room_array = [];
    let entrace_res;
    const floor_res = [];
    const room_res = [];
    const response = [];

    // const arr = this.apartmentsService
    //   .getApartments(building_id)
    //   .then((data) => {
    //     response.push(data);
    //   });
    // const ans = response.reduce((agg, cur) => {
    //   const found = agg.find((x) => x.floor === cur.floor);
    //   if (found) {
    //     found.colors.push(cur.floor);
    //   } else {
    //     agg.push({
    //       name: cur.name,
    //       colors: [cur.color],
    //     });
    //   }
    //   return agg;
    // }, []);

    const arr = [
      {
        id: 1,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 1,
        room_number: 1,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 2,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 1,
        room_number: 2,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 3,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 1,
        room_number: 3,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 4,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 1,
        room_number: 4,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 5,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 2,
        room_number: 5,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 6,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 2,
        room_number: 6,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 7,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 2,
        room_number: 7,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 8,
        createdAt: '2023-08-26T08:54:44.993Z',
        updatedAt: '2023-08-26T08:58:27.765Z',
        entrance: 1,
        floor: 2,
        room_number: 8,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 9,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 1,
        room_number: 1,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 10,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 1,
        room_number: 2,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 11,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 1,
        room_number: 3,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 12,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 2,
        room_number: 4,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 13,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 2,
        room_number: 5,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 14,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 2,
        room_number: 6,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 15,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 3,
        room_number: 7,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 16,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 3,
        room_number: 8,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 17,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 3,
        room_number: 9,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 18,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 4,
        room_number: 10,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 19,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 4,
        room_number: 11,
        cells: null,
        room_space: 58,
        status: null,
      },
      {
        id: 20,
        createdAt: '2023-08-29T08:29:27.199Z',
        updatedAt: '2023-08-29T08:32:01.354Z',
        entrance: 1,
        floor: 4,
        room_number: 12,
        cells: null,
        room_space: 58,
        status: null,
      },
    ];

    // const result = Object.values(
    //   arr.reduce((a, { entrance, floor, room_number, room_space }) => {
    //     a[entrance] ??= { entrance, arena: [], stadium: [] };
    //     if (floor) a[entrance].arena.push({ value: entrance, room_number });
    //     // if (room_number)
    //     //   a[entrance].stadium.push({ value: entrance, room_space });
    //     return a;
    //   }, {}),
    // );

    const data = [
      { name: 'Alice', age: 25, gender: 'female' },
      { name: 'Bob', age: 30, gender: 'male' },
      { name: 'Charlie', age: 25, gender: 'male' },
      { name: 'Diana', age: 30, gender: 'female' },
    ];

    interface GroupedData {
      [key: string]: GroupedData | GroupedItem[];
    }

    interface GroupedItem {
      items: typeof data;
    }

    function groupByMultipleKeys(
      data: typeof this.data,
      keys: string[],
    ): GroupedData {
      const groupedData: GroupedData = {};

      data.forEach((obj) => {
        let currentGroup = groupedData;

        keys.forEach((key) => {
          const value = obj[key];

          if (!currentGroup[value]) {
            currentGroup[value] = {};
          }

          currentGroup = currentGroup[value] as GroupedData;
        });

        if (!currentGroup.items) {
          currentGroup.items = [];
        }

        currentGroup.items = obj;
      });

      return groupedData;
    }

    const groupedByAgeAndGender = groupByMultipleKeys(arr, [
      'entrance',
      'floor',
    ]);
    console.log(JSON.stringify(groupedByAgeAndGender, null, 2));
    return JSON.stringify(groupedByAgeAndGender, null, 2);

    // const groupBy = function groupBy(list, properties, propertyIndex) {
    //   const i = propertyIndex === undefined ? 0 : propertyIndex;
    //
    //   // group by
    //   const grouppedObj = list.reduce((acc, obj) => {
    //     const groupedValue = obj[properties[i]];
    //     if (!groupedValue) {
    //       return acc;
    //     }
    //     if (!acc[groupedValue]) {
    //       acc[groupedValue] = [];
    //     }
    //     acc[groupedValue].push({ ...obj, groupBy: properties.join(',') });
    //     return acc;
    //   }, {});
    //
    //   // group by nested
    //   const keys = Object.keys(grouppedObj);
    //   if (i === properties.length - 1) {
    //     return grouppedObj;
    //   }
    //   keys.forEach((key) => {
    //     grouppedObj[key] = groupBy(grouppedObj[key], properties, i + 1);
    //   });
    //   return grouppedObj;
    // };
    //
    //
    //
    // const results = groupBy(arr, ['entrance','floor', 'room_number'],1);
    // console.log(JSON.stringify(results));
    // return JSON.stringify(results);

    // console.log(
    //   JSON.stringify(
    //     groupByProperties(arr, [
    //       'entrance',
    //       'floor',
    //       'room_number',
    //       'room_space',
    //     ]),
    //   ),
    // );

    // console.log(groupedTech);

    // const ans = arr.reduce((agg, curr) => {
    //   // const entracef = agg.find((xx) => xx.entrance === curr.entrance);
    //   const found = agg.find((x) => (x.floor_num === curr.floor) && (x.entrance===curr.entrance));
    //   // if (entracef) {
    //   //   entracef.entrance.push(curr.entrance);
    //   // }
    //   if (found) {
    //     // found.entrance.push(curr.entrance);
    //     // found.apart.push(curr.entrance);
    //     found.apart.push(curr.room_number);
    //   } else {
    //     agg.push({
    //       entrance: curr.entrance,
    //       floor_num: curr.floor,
    //       apart: [curr.room_number],
    //     });
    //   }
    //
    //   return agg;
    // }, []);
    //
    // console.log(ans);
    // return JSON.stringify(ans);

    // data.forEach((res, k) => {
    //   return res;
    // if (res.entrance !== enterance) {
    //   enterance = res.entrance;
    //   enterance_array.push(enterance);
    // }
    //
    // if (res.floor !== floor) {
    //   floor = res.floor;
    //   floor_array.push(floor);
    // }
    //
    // if (res.room_number !== room_number) {
    //   room_number = res.room_number;
    //   room_array.push(res);
    // }
    // });

    // enterance_array.forEach((entraceData, k) => {
    //   entrace_res = entraceData;
    //   floor_array.forEach((floorData, i) => {
    //     room_array.forEach((roomData, j) => {
    //       if (roomData.floor !== floor_number) {
    //         floor_number = floorData;
    //         console.log(
    //           roomData.floor +
    //             ' ' +
    //             floor_number +
    //             ' ' +
    //             roomData.room_number,
    //         );
    //         room_res.push({ appart_num: roomData.room_number });
    //       }
    //     });
    //
    //     floor_res.push({ floor_num: floorData, apart: room_res });
    //   });
    // });
    // response.push({
    //   entrance: entrace_res,
    //   floor: floor_res,
    // });
    // return JSON.stringify({ data: response });
    // })
    // .catch((error) => {
    //   console.log({
    //     succes: false,
    //     message: error.message,
    //   });
    // });
  }
}
