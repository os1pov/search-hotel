import { takeEvery, put, call } from 'redux-saga/effects'
import { addHotels } from '../reducers/hotelReducer'
import { getHotels } from '../../api/hotelAPI'

const GET_HOTELS = "GET_HOTELS"

function* getHotelsWorker(action) {
    const hotels = yield call(getHotels, action.payload)
    yield put(addHotels(hotels))
}

export function* hotelWatcher() {
    yield takeEvery(GET_HOTELS, getHotelsWorker)
}

export const getHotelsAction = (location, checkIn, checkOut) => ({type: GET_HOTELS, payload: {location, checkIn, checkOut}})