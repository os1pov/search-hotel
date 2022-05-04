import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../redux/sagas/authSaga'
import './AuthContainer.scss'

const AuthContainer = () => {
    const [login, setLogin] = useState("")
    const [isLoginError, setIsLoginError] = useState(false)
    const [loginError, setLoginError] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [passwordError, setPasswordError] = useState("")
    const dispatch = useDispatch()

    const loginValidator = () => {
        // функция возвращает true, если login валидный

        const loginPattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        if (loginPattern.test(login)) {
            setIsLoginError(false)
            setLoginError("")
            return true
        }

        setIsLoginError(true)
        setLoginError("Некорректный логин")
        return false
    }

    const passwordValidator = () => {
        // функция возвращает true, если password валидный

        const cyrillic = /[а-я]/iu
        const space = /\s/u

        if (password.length < 8) {
            setIsPasswordError(true)
            setPasswordError("Пароль должен содержать минимум 8 символов")
            return false
        }
        if (cyrillic.test(password)) {
            setIsPasswordError(true)
            setPasswordError("Пароль не должен содержать кириллицу")
            return false
        }
        if (space.test(password)) {
            setIsPasswordError(true)
            setPasswordError("Пароль не должен содержать пробелы")
            return false
        }

        setIsPasswordError(false)
        setPasswordError("")
        return true
    }

    const buttonValidator = () => {
        const isValidLogin = loginValidator()
        const isValidPassword = passwordValidator()

        if (isValidLogin && isValidPassword) {
            dispatch(signIn({userLogin: login}))
        }
    }

    return (
        <div className="auth__container">
            <div className="auth__title">Simple Hotel Check</div>
            <div className="auth__input__wrapper">
                <div className="auth__input__title">Логин</div>
                <input className="auth__input__content" value={login} onChange={e => setLogin(e.target.value)}/>
                {isLoginError && <div className="auth__input__error">{loginError}</div>}
            </div>
            <div className="auth__input__wrapper">
                <div className="auth__input__title">Пароль</div>
                <input className="auth__input__content" value={password} onChange={e => setPassword(e.target.value)}/>
                {isPasswordError && <div className="auth__input__error">{passwordError}</div>}
            </div>
            <div className="auth__button" onClick={buttonValidator}>Войти</div>
        </div>
    )
}

export default AuthContainer