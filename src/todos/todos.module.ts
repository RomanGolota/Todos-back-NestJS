import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoEntity } from "./todo.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [TypeOrmModule.forFeature([TodoEntity])]
})
export class TodosModule {}
