import React from 'react'

const UpArrowSVG = ({ className, onClick }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none" className={className} onClick={onClick}>
            <path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z" fill="#424242"/>
            <path xmlns="http://www.w3.org/2000/svg" d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z" fill="#424242"/>
        </svg>
    )
}

export default UpArrowSVG