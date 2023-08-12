import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Sales Appartment API Documentation')
  .setVersion('1.0')
  .addTag('API')
  .build();
