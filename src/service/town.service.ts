import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTownDto } from 'src/dtos/town-dto/create-town.dto';
import { Towns } from 'src/entity/town.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TownService {
    constructor(@InjectRepository(Towns) private readonly townRepository: Repository<Towns>) {}

    async create(createTownDto: CreateTownDto) {
        const newTown = await this.townRepository.save(createTownDto)
        return {status:201, data:newTown, message: 'Town created successfully'}
    }
}
