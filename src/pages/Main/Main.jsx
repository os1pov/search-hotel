import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import './Main.scss'

const Main = () => {
    const { isAuth } = useSelector(state => state.auth)

    if (!isAuth) {
        return <Navigate to="/auth" />
    }

    return (
        <div className="main">
            Main
        </div>
    )
}

export default Main