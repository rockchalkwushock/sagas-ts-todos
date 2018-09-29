export interface Todo {
  id: number,
  text: string,
  completed: boolean
}

export interface TodosState {
  readonly error?: string,
  readonly loading: boolean,
  readonly todos: Todo[]
}

export const enum TodoActionTypes {
  COMPLETED = '@@todos/COMPLETED',
  FETCH_ERROR = '@@todos/FETCH_ERROR',
  FETCH_REQUEST = '@@todos/FETCH_REQUEST',
  FETCH_SUCCESS = '@@todos/FETCH_SUCCESS'
}