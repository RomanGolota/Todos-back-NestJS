import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./create-todo.dto";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>
  ) {}

  async getAll() {
    return this.todoRepository.find()
  }

  async create(dto: CreateTodoDto) {
    const todo = this.todoRepository.create(dto)
    return this.todoRepository.save(todo)
  }

  async getById(id: string) {
    return this.todoRepository.findOne({
      where: {
        id: Number(id)
      }
    })
  }

  async getByUserName(userName: string) {
    return this.todoRepository.find({
      where: {
        userName: String(userName)
      }
    })
  }

  async update(id: string, dto: CreateTodoDto) {
    const todo = await this.getById(id)
    todo.title = dto.content
    todo.userName = dto.userName
    todo.isDone = dto.isDone

    return this.todoRepository.save(todo)
  }

  async delete(id: string) {
    return this.todoRepository.delete({ id: Number(id) })
  }
}
