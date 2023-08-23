import { PartialType } from '@nestjs/swagger';
import { CreateTownDto } from './create-town.dto';

export class UpdateTownDto extends PartialType(CreateTownDto) {}
