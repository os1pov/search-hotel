import React from 'react'
import { useDispatch } from "react-redux"
import { signOut } from '../../redux/sagas/authSaga'
import SignOutIconSVG from '../../assets/svg/SignOutIconSVG'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()

    const buttonHandler = () => {
        dispatch(signOut())
    }

    return (
        <div className="header">
            <div className="header__title">Simple Hotel Check</div>
            <div className="header__button" onClick={buttonHandler}>
                <div className="header__button__text">Выйти</div>
                <div className="header__button__icon">
                    <SignOutIconSVG />
                </div>
            </div>
        </div>
    )
}

export default Header