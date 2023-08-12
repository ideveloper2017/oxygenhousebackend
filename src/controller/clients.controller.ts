import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientsService } from 'src/service/clients.service';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
}
