import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = createStore(
  rootReducer,
  applyMiddleware(middleware)
)

sagaMiddleware.run(sagas)