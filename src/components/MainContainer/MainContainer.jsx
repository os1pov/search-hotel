import React from 'react'
import OptionContainer from '../OptionContainer/OptionContainer'
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import SearchResult from '../SearchResult/SearchResult'
import './MainContainer.scss'

const MainContainer = () => {
    return (
        <div className="main__container">
            <OptionContainer />
            <FavoritesContainer />
            <SearchResult />
        </div>
    )
}

export default MainContainer