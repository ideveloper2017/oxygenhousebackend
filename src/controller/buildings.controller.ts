import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
    return this.buildingsService.createBuilding(createBuildingDto);
  }

  @ApiOperation({ summary: "Mavjud barcha binolar ro'yxatini olish" })
  @Get('/all')
  getAllBuildings() {
    return this.buildingsService.findAllBuildings();
  }

  @Patch('/edit/:id')
  editBuilding(@Param('id') id: number, @Body() updateBuildingDto: UpdateBuildingDto) {
    // return this.buildingsService.updateBuilding(id, updateBuildingDto)
  }

  @Delete('/delete/:id')
  deleteBuilding(@Param('id') id: number) {
    return this.buildingsService.deleteBuilding(id)
  }
}
