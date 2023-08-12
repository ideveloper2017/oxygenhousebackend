import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserRolesService } from 'src/service/user-roles.service';

@ApiTags('UserRoles')
@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}
}
