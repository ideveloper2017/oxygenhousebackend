import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Sales Appartment API Documentation')
  .setVersion('1.0')
  .addTag('API')
  .addTag('Towns')
  .addTag('Buildings')
  .addTag('Entrances')
  .addTag('Floors')
  .addTag('Apartments')
  .addTag('Auth')
  .addTag('Users')
  .addTag('Clients')
  .addTag('Regions')
  .addTag('Currencies')
  .addTag('PaymentMethods')
  .addTag('Orders')
  .build();
