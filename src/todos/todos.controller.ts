import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./create-todo.dto";

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll() {
    return this.todosService.getAll()
  }

  @Post()
  async create(@Body() dto: CreateTodoDto) {
    return this.todosService.create(dto)
  }

  @Get('id/:id')
  async getById(@Param('id') id: string) {
    return this.todosService.getById(id)
  }

  @Get(':userName')
  async getByUserName(@Param('userName') userName: string) {
    return this.todosService.getByUserName(userName)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CreateTodoDto) {
    return this.todosService.update(id, dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todosService.delete(id)
  }
}
