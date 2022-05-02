import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AuthBackground from '../../components/Auth/AuthBackground/AuthBackground'
import AuthContainer from '../../components/Auth/AuthContainer/AuthContainer'
import './Auth.scss'

const Auth = () => {
    const { isAuth } = useSelector(state => state.auth)

    if (isAuth) {
        return <Navigate to="/" />
    }

    return (
        <div className="auth">
            <AuthBackground />
            <AuthContainer />
        </div>
    )
}

export default Auth