import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy, creatorSortFavoritesHotels } from '../../redux/reducers/hotelReducer'
import UpArrowSVG from '../../assets/svg/UpArrowSVG'
import DownArrowSVG from '../../assets/svg/DownArrowSVG'
import FavoritesHotels from './FavoritesHotels/FavoritesHotels'
import './FavoritesContainer.scss'

const FavoritesContainer = () => {
    const sortBy = useSelector(state => state.hotel.sortBy)
    const dispatch = useDispatch()

    const changeSortBy = (sortBy) => {
        dispatch(setSortBy(sortBy))
        dispatch(creatorSortFavoritesHotels(sortBy))
    }

    return (
        <div className="favorites__container">
            <div className="favorites__title">Избранное</div>
            <div className="favorites__select">
                <div className={`favorites__option mr-5 ${sortBy === "lowRating" || "highRating" ? "" : "opacity50"}`}>
                    <div className="favorites__option__title">Рейтинг</div>
                    <div className="favorites__option__arrows">
                        <UpArrowSVG className={`${sortBy === "highRating" ? "" : "opacity50"}`} onClick={() => changeSortBy("highRating")}/>
                        <DownArrowSVG className={`${sortBy === "lowRating" ? "" : "opacity50"}`} onClick={() => changeSortBy("lowRating")}/>
                    </div>
                </div>
                <div className={`favorites__option ${sortBy === "lowPrice" || "highPrice" ? "" : "opacity50"}`}>
                    <div className="favorites__option__title">Цена</div>
                    <div className="favorites__option__arrows">
                        <UpArrowSVG className={`${sortBy === "highPrice" ? "" : "opacity50"}`} onClick={() => changeSortBy("highPrice")}/>
                        <DownArrowSVG className={`${sortBy === "lowPrice" ? "" : "opacity50"}`} onClick={() => changeSortBy("lowPrice")}/>
                    </div>
                </div>
            </div>
            <FavoritesHotels />
        </div>
    )
}

export default FavoritesContainer