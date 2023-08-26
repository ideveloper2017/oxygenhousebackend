import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from 'src/service/roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  
}
