import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHotels } from '../../redux/sagas/hotelSaga'
import './OptionContainer.scss'

const OptionContainer = () => {
    const [location, setLocation] = useState("Москва")
    const [daysNumber, setDaysNumber] = useState("1")
    const [checkInDate, setCheckInDate] = useState(getCurrentDate())
    const dispatch = useDispatch()

    function getCurrentDate() {
        // функция возвращает текущую дату в формате YYYY-MM-DD

        const date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        const year = date.getFullYear()

        if (month < 10) month = "0" + month
        if (day < 10) day = "0" + day

        return year + "-" + month + "-" + day
    }

    const getCheckOutDate = () => {
        // функция складывает дату заселения и количество дней, возвращает дату выезда в формате YYYY-MM-DD

        const [day, month, year] =  new Date(Date.parse(checkInDate))
            .toLocaleString("ru", {year:"numeric", month:"numeric", day:"numeric"})
            .split(".").map(e => Number(e))
        return new Date(year, month - 1, day + +daysNumber).toISOString().substring(0, 10)
    }

    const searchHotels = () => {
        const checkOutDate = getCheckOutDate()
        dispatch(setHotels(location, checkInDate, checkOutDate, daysNumber))
    }

    useEffect(() => {
        searchHotels()
    },[])

    return (
        <div className="option__container">
            <div className="option__container__content">
                <div className="option__input__wrapper mb-15">
                    <div className="option__input__title">Локация</div>
                    <input className="option__input__content" value={location}
                           onChange={e => setLocation(e.target.value)}/>
                </div>
                <div className="option__input__wrapper mb-15">
                    <div className="option__input__title">Дата заселения</div>
                    <input type="date" className="option__input__content" value={checkInDate} min={getCurrentDate()}
                           onChange={e => setCheckInDate(e.target.value)}/>
                </div>
                <div className="option__input__wrapper mb-30">
                    <div className="option__input__title">Количество дней</div>
                    <input type="number" className="option__input__content" value={daysNumber}
                           onChange={e => setDaysNumber(e.target.value)}/>
                </div>
                <div className="option__button" onClick={searchHotels}>Найти</div>
            </div>
            </div>
    )
}

export default OptionContainer