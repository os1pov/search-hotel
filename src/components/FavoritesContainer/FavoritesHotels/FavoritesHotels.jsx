import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteHotel from './FavoriteHotel/FavoriteHotel'
import './FavoritesHotels.scss'

const FavoritesHotels = () => {
    const favoritesHotels = useSelector(state => state.hotel.favoritesHotels)
        .map(hotel => <FavoriteHotel key={hotel.id} hotel={hotel}/>)

    return (
        <div className="favorites__hotels">
            {favoritesHotels}
        </div>
    )
}

export default FavoritesHotels