import { takeEvery, put, call } from 'redux-saga/effects'
import {setHotelsDone, addHotelsDone, setIsLoading, setSearchData} from '../reducers/hotelReducer'
import { getHotels } from '../../api/hotelAPI'

const SET_HOTELS = "SET_HOTELS"
const ADD_HOTELS = "ADD_HOTELS"

function* setHotelsWorker(action) {
    const {location, checkIn: checkInDate, checkOut: checkOutDate} = action.payload
    yield put(setSearchData({location, checkInDate, checkOutDate}))
    yield put(setIsLoading(true))
    const hotels = yield call(getHotels, action.payload)
    yield put(setHotelsDone(hotels))
    yield put(setIsLoading(false))
}

function* addHotelsWorker(action) {
    yield put(setIsLoading(true))
    const hotels = yield call(getHotels, action.payload)
    yield put(addHotelsDone(hotels))
    yield put(setIsLoading(false))
}

export function* hotelWatcher() {
    yield takeEvery(SET_HOTELS, setHotelsWorker)
    yield takeEvery(ADD_HOTELS, addHotelsWorker)
}

export const setHotels = (location, checkIn, checkOut, daysNumber) => ({type: SET_HOTELS, payload: {location, checkIn, checkOut, daysNumber}})

export const addHotels = (location, checkIn, checkOut) => ({type: ADD_HOTELS, payload: {location, checkIn, checkOut}})