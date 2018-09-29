import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { TodoActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../../api'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com'


function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/todos')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(TodoActionTypes.FETCH_REQUEST, handleFetch)
}

export function* todosSaga() {
  yield all([fork(watchFetchRequest)])
}