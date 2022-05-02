import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { isAuth } from '../../redux/sagas/authSaga'
import { Routes, Route } from 'react-router-dom'
import Auth from '../../pages/Auth/Auth'
import Main from '../../pages/Main/Main'
import './App.scss'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isAuth())
    },[])

    return (
        <div className="app">
            <Routes>
                <Route path="/auth" element={ <Auth/> }/>
                <Route path="/" element={ <Main/> }/>
            </Routes>
        </div>
    )
}

export default App