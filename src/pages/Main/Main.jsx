import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import MainContainer from '../../components/MainContainer/MainContainer'
import './Main.scss'

const Main = () => {
    const { isAuth } = useSelector(state => state.auth)

    if (!isAuth) {
        return <Navigate to="/auth" />
    }

    return (
        <div className="main">
            <Header />
            <MainContainer />
        </div>
    )
}

export default Main