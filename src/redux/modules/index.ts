import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { todosReducer } from './todos/reducer'
import { todosSaga } from './todos/sagas'
import { TodosState } from './todos/types'

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