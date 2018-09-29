import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { TodosState } from './todos/types'
import { todosReducer } from './todos/reducer'
import { todosSaga } from './todos/sagas'

export interface ApplicationState {
  todos: TodosState
}

const rootReducer = combineReducers<ApplicationState>({
  todos: todosReducer
})

export function* rootSaga() {
  yield all([fork(todosSaga)])
}

export { rootReducer }