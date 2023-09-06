import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        // entities: [__dirname + '/../**/*.entity.{js,ts}'],
        entities: [
          __dirname + '/../**/*.entity.ts',
          __dirname + 'build/**/*.entity.js',
        ],
        migrationsTableName: 'migration',
        migrations: ['src/migration/*.ts'],
        cli: {
          migrationsDir: './src/migration',
        },
        synchronize: true,
        logging: false,
      }),
    }),
  ],
  providers: [],
  controllers: [],
})
export class DatabaseModule {}
