import { Injectable } from '@nestjs/common';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  public todos: Todo[] = [];
  create(createTodoDto: Todo) {
    this.todos.push(createTodoDto);
    return 'New Todo Added Successfully';
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    let index = this.todos.findIndex((value, i) => value.id === id);
    return this.todos[index];
  }

  update(id: number, updateTodoDto: Todo) {
    let index = this.todos.findIndex((value, i) => value.id === id);
    this.todos[index] = updateTodoDto;
    return `Todo with id# ${id} Successfully Updated`;
  }

  remove(id: number) {
    this.todos = this.todos.filter((value) => value.id !== id);
    return `Todo with id# ${id} removed`;
  }
}
