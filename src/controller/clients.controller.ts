import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from 'src/dtos/client-dto/create-client.dto';
import { UpdateClientDto } from 'src/dtos/client-dto/update-client.dto';
import { Clients } from 'src/entity/clients.entity';
import { ClientsService } from 'src/service/clients.service';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiOperation({ summary: "Yangi mijoz qo'shish" })
  @ApiResponse({ status: 201, description: "Mijoz qo'shildi!" })
  @Post('/create')
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.createClient(createClientDto);
  }

  @ApiOperation({ summary: "Mavjud mijozlar ro'yxati" })
  @ApiResponse({ status: 200, type: Clients })
  @Get('/all')
  getAllClients() {
    return this.clientsService.findAllClients();
  }

  @ApiOperation({ summary: "Mijoz ma'lumotlarini tahrirlash" })
  @ApiResponse({ status: 200, description: "Mijoz ma'lumotlari tahrirlandi." })
  @Patch('/edit/:id')
  updateClient(
    @Param('id') id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientsService.editClientInfo(id, updateClientDto);
  }

  @ApiOperation({ summary: "Mijoz ma'lumotlari" })
  @ApiResponse({ status: 200, type: Clients })
  @Get('/:id')
  getClientById(@Param('id') id: number) {
    return this.clientsService.findOneClient(id);
  }
}
