import React from 'react'
import HeartSVG from '../../../../assets/svg/HeartSVG'
import Rating from '../../../Rating/Rating'
import './FavoriteHotel.scss'

const FavoriteHotel = ({hotel}) => {
    const {name, stars, price, checkInDate, daysNumber} = hotel
    const [day, month, year] = new Date(Date.parse(checkInDate))
        .toLocaleString("en-GB", {day: "numeric", month: "long", year: "numeric"})
        .split(" ")

    const setWordDeclination = (num) => {
        // функция возвращает нужное склонение слова в зависимости от num
        const forms = ["день", "дня", "дней"]

        return num % 10 === 1 && num % 100 !== 11
            ? forms[0]
            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
                ? forms[1]
                : forms[2]
    }

    return (
        <div className="favorite__hotel">
            <div className="hotel__wrapper">
                <div className="hotel__name">
                    {name}
                </div>
                <HeartSVG hotel={hotel}/>
            </div>
            <div className="hotel__date">
                {day} {month}, {year} - {daysNumber} {setWordDeclination(daysNumber)}
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

export default FavoriteHotel