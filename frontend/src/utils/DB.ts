import { Todo } from '../types/todo.types';
import { User } from '../types/user.types';

export class DB {
  // normally I would get this from env
  static readonly endpoint = 'http://localhost:8000';

  // normally I would use an auth provider or at least a JWT, but there's no time
  static user_id: string | null = '4845adf3-0220-469f-ace0-e8a441fdb8a5';

  private static async call(
    path: string | string[],
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    payload?: any,
  ) {
    if (typeof path === 'string') {
      path = path.split('/');
    }
    try {
      console.log(
        'making api call: ',
        DB.endpoint +
          '/' +
          path.join('/') +
          ' with method ' +
          method +
          ' and payload: ',
        payload,
      );
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

  // normally would use real auth or at least JWT, but there's no time
  static async getAllUsers() {
    const users = await DB.call('users', 'GET');
    console.log('got users: ', users);
    return users as User[];
  }

  static async getTodos() {
    if (!DB.user_id) {
      throw new Error('User not logged in');
    }
    const todos = await DB.get(['todos', DB.user_id]);
    console.log('got todos: ', todos);
    return todos as Todo[];
  }
}
