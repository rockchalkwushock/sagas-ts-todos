import { Reducer } from 'redux'

import { TodoActionTypes, TodosState } from './types'

const initialState: TodosState = {
  error: '',
  loading: false,
  todos: []
}

const reducer: Reducer<TodosState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.FETCH_ERROR:
      return {...state, error: action.payload, loading: false }
    case TodoActionTypes.FETCH_REQUEST:
      return {...state, loading: true}
    case TodoActionTypes.FETCH_SUCCESS:
      return {...state, loading: false, todos: action.payload}
    default:
      break;
  }
}

export { reducer as todosReducer }