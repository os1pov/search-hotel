import { all } from 'redux-saga/effects'
import { authWatcher } from './authSaga'

export function* rootSaga() {
    yield all([
        authWatcher()
    ])
}