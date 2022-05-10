import React from 'react'
import { setWordDeclination } from '../../setWordDeclination'
import HeartSVG from '../../assets/svg/HeartSVG'
import Rating from '../Rating/Rating'
import './Hotel.scss'

const Hotel = ({ hotel }) => {
    const {name, stars, price, checkInDate, daysNumber} = hotel
    const [day, month, year] = new Date(Date.parse(checkInDate))
        .toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"})
        .split(" ")
    const inclinedWordDay = setWordDeclination(["день", "дня", "дней"])(daysNumber)

    return (
        <div className="hotel">
            <div className="hotel__wrapper">
                <div className="hotel__name">
                    {name}
                </div>
                <div className="heart__icon">
                    <HeartSVG hotel={hotel}/>
                </div>
            </div>
            <div className="hotel__date">
                {day} {month}, {year} - {daysNumber} {inclinedWordDay}
            </div>
            <div className="hotel__wrapper">
                <Rating rating={stars}/>
                <div className="hotel__price">
                    <div className="hotel__price__text">Price:</div>
                    <div className="hotel__price__value">{price} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default Hotel