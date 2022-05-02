import { takeEvery, put } from 'redux-saga/effects'
import { setUser, deleteUser } from '../reducers/authReducer'

const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"
const IS_AUTH = "IS_AUTH"

function* signInWorker(action) {
    yield localStorage.setItem("isAuth", "true")
    yield localStorage.setItem("userLogin", action.payload.userLogin)
    yield put(setUser(action.payload))
}

function* signOutWorker() {
    yield localStorage.removeItem("isAuth")
    yield localStorage.removeItem("userLogin")
    yield put(deleteUser())
}

function* isAuthWorker() {
    const token = yield localStorage.getItem("isAuth")

    if (token) {
        const userLogin = yield localStorage.getItem("userLogin")
        yield put(setUser({userLogin}))
    }
}

export function* authWatcher() {
    yield takeEvery(SIGN_IN, signInWorker)
    yield takeEvery(SIGN_OUT, signOutWorker)
    yield takeEvery(IS_AUTH, isAuthWorker)
}

export const signIn = user => ({type: SIGN_IN, payload: user})

export const signOut = () => ({type: SIGN_OUT})

export const isAuth = () => ({type: IS_AUTH})