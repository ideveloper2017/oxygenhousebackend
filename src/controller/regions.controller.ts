import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus, Param, ParseIntPipe,
    Post,
    Res,
    UseInterceptors,
} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {Response} from 'express';
import {RegionsService} from '../service/regions.service';
import {DistrictsService} from '../service/districts.service';
import {RegionDto} from '../dtos/region.dto';

// @UseInterceptors(LoggingInterceptor)
@ApiTags('Regions')
@Controller('regions')
export class RegionsController {
    constructor(
        private readonly regionService: RegionsService,
        private readonly distrService: DistrictsService,
    ) {
    }

    @Get('/regionlist')
    @ApiResponse({status: 403, description: 'Forbidden.'})
    public regionList(@Res() res: Response) {
        const regions = this.regionService.getAllRegion();
        regions
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).json({success: true, data: data});
                } else {
                    res.status(400).send({success: false, data: []});
                }
            })
            .catch((error) => {
                throw new HttpException(
                    {
                        status: HttpStatus.FORBIDDEN,
                        error: 'This is a custom message',
                    },
                    HttpStatus.FORBIDDEN,
                    {
                        cause: error,
                    },
                );
            });
    }

    @Get('/distrlist')
    @ApiResponse({status: 403, description: 'Forbidden.'})
    public distrList(@Res() res: Response) {
        const regions = this.distrService.getAllDistricts();
        regions
            .then((data) => {
                if (data.length > 0) {
                    res.status(200).json({success: true, data: data});
                } else {
                    res.status(400).send({success: false, data: []});
                }
            })
            .catch((error) => {
                throw new HttpException(
                    {
                        status: HttpStatus.FORBIDDEN,
                        error: 'This is a custom message',
                    },
                    HttpStatus.FORBIDDEN,
                    {
                        cause: error,
                    },
                );
            });
    }

    @Post('addregion')
    public addregion(@Body() regionDto: RegionDto, @Res() res: Response) {
        this.regionService
            .insertRegion(regionDto)
            .then((data) => {
                res
                    .status(HttpStatus.CREATED)
                    .send({success: true, message: 'created success!!!', data: data});
            })
            .catch((error) => {
                res
                    .status(HttpStatus.FORBIDDEN)
                    .send({success: false, message: error});
            });
    }

    @Get('/filldateregion')
    public fillDataregion() {
        return this.regionService.fillDataRegion();
    }

    @Get('/selectdistrict/:id')
    public getRegionByDistrict(@Res() res, @Param('redion_id', ParseIntPipe) id: number) {

        return this.distrService.getSelectDistrict(id).then((data) => {
            if (data.length > 0) {
                res.status(200).send({success:true,data:data,message:'Fetch All Records!!!'})
            } else {
              res.status(400).send({success:false,data:null,message:"Not found Records!!!"})
            }
        }).catch((error)=>{
          res.status(401).send({success:false,message:error.message})
        })
    }
}
