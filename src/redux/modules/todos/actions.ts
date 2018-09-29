import { action } from 'typesafe-actions'

import { TodoActionTypes, Todo } from './types'

export const fetchError = (message: string) => action(TodoActionTypes.FETCH_ERROR, message)
export const fetchRequest = () => action(TodoActionTypes.FETCH_REQUEST)
export const fetchSuccess = (todos: Todo[]) => action(TodoActionTypes.FETCH_SUCCESS, todos)