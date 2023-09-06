import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateBuildingDto } from 'src/dtos/building-dto/create-building.dto';
import { UpdateBuildingDto } from 'src/dtos/building-dto/update-building.dto';
import { BuildingsService } from 'src/service/buildings.service';

@ApiTags('Buildings')
@Controller('buildings')
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @ApiOperation({ summary: 'Bino yaratish ichidagi kvartiralari bilan' })
  @Post('/add')
  addBuilding(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingsService.createBuilding(createBuildingDto).then(response => {
      if(response.length != 0){
        return {success: true, data: response, message: 'Building added successfully'}
      }else if(response) {
        return {success: true, data: response, message: 'Empty building added successfully'}
      }
    })
  }
  
  @ApiOperation({ summary: "Mavjud barcha binolar ro'yxatini olish" })
  @Get('/all')
  getAllBuildings() {
    return this.buildingsService.findAllBuildings().then(response => {
      if(response.length != 0){
        return {success: true, data: response, message: 'Data fetched successfully'}
      }else {
        return {success: false, message: "No data found!"}
      }
    }).catch(error => {
      return {success: false, message:error.message}
    })
  }
  
  @Get('/:town_id')
  getTestBuildings(@Param('town_id') town_id: number, @Res() res: Response) {
    return this.buildingsService.getBuldingsOfTown(town_id).then((data) => {
      if (data.length > 0) {
        return res.status(200).send({
          success: true,
          data: data,
          message: 'found record!!!',
        });
      } else {
        res.status(200).send({
          success: false,
          data: null,
          message: 'not found record!!!',
        });
      }
    })
    .catch((error) => {
      res
        .status(200)
        .send({ success: false, data: null, message: 'not found record!!!' });
    });
  }

    @ApiOperation({ summary: 'Bino tahrirlash' })
    @Patch('/edit/:id')
    editBuilding(@Param('id') id: number, @Body() updateBuildingDto: UpdateBuildingDto,) {
    return this.buildingsService.updateBuilding(id, updateBuildingDto).then(data => {
      if(data.affected){
        return {success: true, message: "Bino tahrirlandi."}
      }else {
        return {success: false, message:"Bino topilmadi."}
      }
    }).catch(error => console.log(error))
  }

  @ApiOperation({ summary: "Bino o'chirish" })
  @Delete('/delete/:id')
  deleteBuilding(@Param('id') id: number) {
    return this.buildingsService.deleteBuilding(id).then(data => {
      if (data.affected != 0) {
        return { success: true, message: "Bino o'chirildi" };
      }
      return { success: false, message: 'Bino topilmadi' };
    }).catch(error => console.log(error))
  }
}
