import React from 'react'
import './Rating.scss'

const Rating = ({ rating }) => {

    let stars = []

    for (let i = 0; i < rating; i++) {
        stars.push(<div key={i} className="star active"></div>)
    }

    for (let i = 0; i < 5 - rating; i++) {
        stars.push(<div key={5 - i} className="star"></div>)
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating