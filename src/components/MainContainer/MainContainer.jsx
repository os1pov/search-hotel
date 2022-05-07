import React from 'react'
import OptionContainer from '../OptionContainer/OptionContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import './MainContainer.scss'

const MainContainer = () => {
    return (
        <div className="main__container">
            <OptionContainer />
            <FavoritesContainer />
        </div>
    )
}

export default MainContainer