import React from 'react'
import { useSelector } from 'react-redux'
import { setWordDeclination } from '../../setWordDeclination'
import Scrollable from '../Scrollable/Scrollable'
import Hotels from '../Hotels/Hotels'
import './SearchResult.scss'

const SearchResult = () => {
    const { location, checkInDate, favoritesHotels } = useSelector(state => state.hotel)
    const date = new Date(Date.parse(checkInDate))
        .toLocaleString("ru", {day: "2-digit", month: "long", year: "numeric"})
        .slice(0, -2)
    const favoritesHotelsNumber = favoritesHotels.length
    const inclinedWordHotel = setWordDeclination(["отель", "отеля", "отелей"])(favoritesHotelsNumber)

    return (
        <div className="search-result">
            <div className="search-result__wrapper">
                <div className="search-result__city">Отели - {location}</div>
                <div className="search-result__date">{date}</div>
            </div>
            <div>
                <Scrollable />
            </div>
            <div className="search-result__information">Добвленно в Избранное: {favoritesHotelsNumber} {inclinedWordHotel}</div>
            <Hotels />
        </div>
    )
}

export default SearchResult