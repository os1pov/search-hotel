import React from 'react'
import { useSelector } from 'react-redux'
import Hotel from '../Hotel/Hotel'
import HomeSVG from '../../assets/svg/HomeIconSVG'
import './Hotels.scss'

const Hotels = () => {
    const hotels = useSelector(state => state.hotel.hotels)
        .map((hotel, i) =>
            <div key={i + hotel.id} className="hotel__container">
                <div className="hotel__icon">
                    <HomeSVG />
                </div>
                <Hotel hotel={hotel}/>
            </div>
        )

    if (hotels.length === 0) {
        return <div className="hotels__empty">Ничего не найдено</div>
    }

    return (
        <>
            <div className="hotels">
                {hotels}
            </div>
        </>
    )
}

export default Hotels