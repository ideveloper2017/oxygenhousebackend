import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { UsersController } from './controller/users.controller';
import { ClientsController } from './controller/clients.controller';
import { ApartmentsController } from './controller/apartments.controller';
import { BuildingsController } from './controller/buildings.controller';
import { RolesController } from './controller/roles.controller';
import { PriceController } from './controller/price.controller';
import { SalesController } from './controller/sales.controller';
import { PaymentDetailsController } from './controller/payment_details.controller';
import { PaymentMethodsController } from './controller/payment_methods.controller';
import { SaleDetailsController } from './controller/sale_details.controller';
import { UserRolesController } from './controller/user_roles.controller';
import { UsersService } from './service/users.service';
import { ClientsService } from './service/clients.service';
import { BuildingsService } from './service/buildings.service';
import { ApartmentsService } from './service/apartments.service';
import { PriceService } from './service/price.service';
import { PaymentDetailsService } from './service/payment_details.service';
import { PaymentMethodsService } from './service/payment_methods.service';
import { SaleDetailsService } from './service/sale_details.service';
import { RolesService } from './service/roles.service';
import { UserRolesService } from './service/user-roles.service';
import { SalesService } from './service/sales.service';
import { AuthModule } from './options/jwt-service/auth.module';
import { UsersModule } from './modules/users/users.module';
import { BuildingsModule } from './modules/buildings/buildings.module';
import { ApartmentsModule } from './modules/apartments/apartments.module';
import { ClientsModule } from './modules/clients/clients.module';
import { PaymentDetailsModule } from './modules/payment_details/payment_details.module';
import { SaleDetailsModule } from './modules/sale_details/sale_details.module';
import { SalesModule } from './modules/sales/sales.module';
import { RolesModule } from './modules/roles/roles.module';
import { PaymentMethodsModule } from './modules/payment_methods/payment_methods.module';
import { TownController } from './controller/town.controller';
import { TownService } from './service/town.service';
import { TownModule } from './modules/town/town.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DATABASE: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    BuildingsModule,
    ApartmentsModule,
    ClientsModule,
    PaymentDetailsModule,
    SaleDetailsModule,
    SalesModule,
    RolesModule,
    PaymentMethodsModule,
    TownModule,
  ],
  controllers: [
    UsersController,
    ClientsController,
    ApartmentsController,
    BuildingsController,
    RolesController,
    PriceController,
    SalesController,
    PaymentDetailsController,
    PaymentMethodsController,
    SaleDetailsController,
    UserRolesController,
    TownController,
  ],
  providers: [
    UsersService,
    ClientsService,
    BuildingsService,
    ApartmentsService,
    PriceService,
    PaymentDetailsService,
    PaymentMethodsService,
    SaleDetailsService,
    RolesService,
    UserRolesService,
    SalesService,
    TownService,
  ],
})
export class AppModule {
  constructor() {}
}
