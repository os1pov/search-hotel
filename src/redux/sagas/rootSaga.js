import { all } from 'redux-saga/effects'
import { authWatcher } from './authSaga'
import { hotelWatcher } from './hotelSaga'

export function* rootSaga() {
    yield all([
        authWatcher(),
        hotelWatcher()
    ])
}