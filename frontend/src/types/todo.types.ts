// Only for time's sake. I would normally configure type sharing between fe & be.

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  userId: string;
}

export interface UpdateTodoDto {
  text?: string;
  completed?: string;
}

export interface CreateTodoDto {
  text?: string;
}
