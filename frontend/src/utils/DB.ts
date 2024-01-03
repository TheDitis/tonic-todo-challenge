import { CreateTodoDto, Todo } from '../types/todo.types';
import { User } from '../types/user.types';

export class DB {
  // normally I would get this from env
  static readonly endpoint = 'http://localhost:8000';

  // normally I would use an auth provider or at least a JWT, but there's no time
  static userId: string | null = localStorage.getItem('userId');

  static async login(username: string) {
    return await DB.auth(username, 'login');
  }

  static async signup(username: string) {
    return await DB.auth(username, 'signup');
  }

  private static async auth(username: string, kind: 'login' | 'signup') {
    const user = await (kind === 'login'
      ? await DB.get(['users', 'name', username])
      : DB.call(['users'], 'POST', { username }));
    if (!user) {
      throw new Error('User not found');
    }
    DB.userId = user.id;
    localStorage.setItem('userId', user.id);
    return user as User;
  }

  static async logout() {
    DB.userId = null;
    localStorage.removeItem('userId');
  }

  static async loadAuth() {
    if (DB.userId) {
      return (await DB.get(['users', DB.userId])) as User;
    }
    return null;
  }

  private static async call(
    path: string | string[],
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    payload?: any,
  ) {
    if (typeof path === 'string') {
      path = path.split('/');
    }
    try {
      const response = await fetch(DB.endpoint + '/' + path.join('/'), {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload ? JSON.stringify(payload) : undefined,
      });
      return await response.json();
    } catch (e) {
      console.error('Error sending data: ', e);
      return null;
    }
  }

  static async get(path: string | string[]) {
    return await DB.call(path, 'GET');
  }

  private static async mutate(
    path: string | string[],
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    payload: any,
  ) {
    return await DB.call(path, method, payload);
  }

  // normally would use real auth or at least JWT, but there's no time
  static async getAllUsers() {
    const users = await DB.call('users', 'GET');
    return users as User[];
  }

  static async getTodos() {
    if (!DB.userId) {
      throw new Error('User not logged in');
    }
    const todos = await DB.get(['todos', DB.userId]);
    return todos as Todo[];
  }

  static async createTodo(partialTodo: CreateTodoDto) {
    if (!DB.userId) {
      throw new Error('User not logged in');
    }
    const todo = await DB.mutate('todos', 'POST', {
      ...partialTodo,
      userId: DB.userId,
    });
    console.log('created todo: ', todo);
    return todo as Todo;
  }

  static async updateTodo(partialTodo: Todo) {
    const todo = await DB.mutate(
      ['todos', partialTodo.id],
      'PATCH',
      partialTodo,
    );
    return todo as Todo;
  }

  static async deleteTodo(id: string) {
    const todo = await DB.mutate(['todos', id], 'DELETE', {});
    return todo as Todo;
  }
}
