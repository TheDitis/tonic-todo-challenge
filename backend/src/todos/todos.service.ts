import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.text = createTodoDto.text;
    todo.completed = false;
    this.todos.push(todo);
    return todo;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id === id);
    Object.assign(todo, updateTodoDto);
  }

  remove(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException('Cannot delete: todo not found');
    }
    this.todos.splice(index, 1);
  }
}
