import React from 'react'
import './Rating.scss'

const Rating = ({ rating }) => {

    let stars = []

    for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star active"></span>)
    }

    for (let i = 0; i < 5 - rating; i++) {
        stars.push(<span key={5 - i} className="star"></span>)
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating