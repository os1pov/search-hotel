import React from 'react'
import { useSelector } from 'react-redux'
import Hotel from '../../Hotel/Hotel'
import './FavoritesHotels.scss'

const FavoritesHotels = () => {
    const favoritesHotels = useSelector(state => state.hotel.favoritesHotels)
        .map(hotel => <Hotel key={hotel.id} hotel={hotel} />)

    if (favoritesHotels.length === 0) {
        return <div className="favorites__empty">Пусто</div>
    }

    return (
        <div className="favorites__hotels">
            {favoritesHotels}
        </div>
    )
}

export default FavoritesHotels