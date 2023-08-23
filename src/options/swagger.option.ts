import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Sales Appartment API Documentation')
  .setVersion('1.0')
  .addTag('API')
  .addTag('Towns')
  .addTag('Buildings')
  .addTag('Apartments')
  .addTag('Users')
  .addTag('Clients')
  .addTag('regions')
  .addTag('Currency')
  .build();
