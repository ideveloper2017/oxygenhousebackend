import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentsService } from 'src/service/apartments.service';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}
  @Get()
  sayHello() {
    return 'Hello from Apartments'
  }
}
