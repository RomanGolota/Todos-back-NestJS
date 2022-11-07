import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from 'path';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({envFilePath: ['.env']}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: String(process.env.DATABASE_HOST),
      port: Number(process.env.DATABASE_PORT),
      database: String(process.env.DATABASE_NAME),
      username: String(process.env.DATABASE_USERNAME),
      password: String(process.env.DATABASE_PASSWORD),
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
      synchronize: true
    }),
    TodosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
