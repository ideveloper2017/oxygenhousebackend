import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Towns } from '../entity/town.entity';
import { CreateTownDto } from '../dtos/town-dto/create-town.dto';
import {UpdateTownDto} from "../dtos/town-dto/update-town.dto";

@Injectable()
export class TownService {
  constructor(
    @InjectRepository(Towns) private readonly townRepository: Repository<Towns>,
  ) {}

  async createTown(createTownDto: CreateTownDto) {
    const town = await this.townRepository.findOne({
      where: { name: createTownDto.name },
    });

    if (!town) {
      const newTown = await this.townRepository.save(createTownDto);
      return {
        status: 201,
        data: newTown,
        message: 'Town created successfully',
      };
    } else {
      return { status: 400, message: 'Bu nomdagi turar-joy mavjud' };
    }
  }

  async findAllTowns() {
    const towns = await this.townRepository.find({ relations: ['buildings'] });
    return towns;
  }

  async updateTown(id: number, updateTownDto: UpdateTownDto) {
    const updatedTown = await this.townRepository.update(id, updateTownDto);
    if (updatedTown.affected == 0) {
      return { status: 404, message: 'Turar-joy topilmadi!' };
    }
    return { status: 200, message: 'Turar-joy tahrirlandi!' };
  }

  async deleteTown(id: number) {
    const deletedTown = await this.townRepository.delete(id);

    if (deletedTown.affected == 0) {
      return { status: 404, message: 'Turar-joy topilmadi! ' };
    }
    return { status: 200, message: "Turar-joy o'chirildi!" };
  }

  // async getTownInfo() {
  //   const info = await this.townRepository
  //     .createQueryBuilder('towns')
  //     .leftJoinAndSelect('towns.buildings', 'buildings')
  //     .leftJoinAndSelect('buildings.apartments', 'apartments')
  //     .loadRelationCountAndMap('towns.buildingCount', 'towns.buildings')
  //     .loadRelationCountAndMap(
  //       'buildings.apartmentCount',
  //       'buildings.apartments',
  //     )
  //     .select(['towns.name', 'towns.createdAt', 'buildings.name'])
  //     .getMany();

  //   return {
  //     success: true,
  //     data: info,
  //     message: 'Towns informations fetched successfully',
  //   };
  // }
  async clearDatabase() {
    const appDataSource = new DataSource({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      logging: false,
    });
    const entities = appDataSource.entityMetadatas;

    console.log(entities);
    for await (const entity of entities) {
      const repository = appDataSource.getRepository(entity.name);

      await repository.query(
        `TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`,
      );
    }
  }
}
