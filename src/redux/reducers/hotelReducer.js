const SET_SEARCH_DATA = "SET_SEARCH_DATA"
const SET_HOTELS_DONE = "SET_HOTELS_DONE"
const ADD_HOTELS_DONE = "ADD_HOTELS_DONE"
const SET_SORT_BY = "SET_SORT_BY"
const SORT_FAVORITES_HOTELS = "SORT_FAVORITES_HOTELS"
const ADD_FAVORITE_HOTEL = "ADD_FAVORITE_HOTEL"
const DELETE_FAVORITE_HOTEL = "DELETE_FAVORITE_HOTEL"
const IS_LOADING = "IS_LOADING"

const sortFavoritesHotels = (hotels, sortBy) => {
    // функция принимает массив и сортирует его по sortBy
    switch (sortBy) {
        // массив отсортируется по рейтингу по возрастанию
        case "lowRating":
            return hotels.sort((a,b) => a.stars - b.stars)

        // массив отсортируется по рейтингу по убыванию
        case "highRating":
            return hotels.sort((a,b) => b.stars - a.stars)

        // массив отсортируется по цене по возрастанию
        case "lowPrice":
            return hotels.sort((a,b) => a.price - b.price)

        // массив отсортируется по цене по убыванию
        case "highPrice":
            return hotels.sort((a,b) => b.price - a.price)

        default:
            return hotels
    }
}

const getUniqueHotels = hotels => {
    // функция принимает масиив и возврщает массив уникальных значений

    return [...new Map(hotels.map(hotel => [hotel["id"], hotel])).values()]
}

const changeIsFavorite = (hotels, hotelId) => {
    // функция принимает массив, находит в нем объект с hotelId, у найденного объекта меняет isFavorite на пртивоположное значение
    return hotels.map(hotel => hotel.id === hotelId ? {...hotel, isFavorite: !hotel.isFavorite } : hotel)
}

const checkHotelsIsFavorite = (hotels, favoritesHotels) => {
    //функция проверяет, есть ли среди отелей отель, который находится в "избранных"
    //если есть, то значение переменной isFavorite меняется на true

    let favoritesHotelsId = new Set()

    for (let i = 0; i < favoritesHotels.length; i++) {
        favoritesHotelsId.add(favoritesHotels[i].id)
    }

    return hotels.map(hotel => favoritesHotelsId.has(hotel.id) ? {...hotel, isFavorite: true} : hotel)
}

const initState = {
    location: "",
    checkInDate: "",
    checkOutDate: "",
    hotels: [],
    favoritesHotels: [],
    sortBy: "lowPrice",
}

export const hotelReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SEARCH_DATA:
            return {
                ...state,
                ...action.payload
            }

        case SET_HOTELS_DONE:
            return {
                ...state,
                hotels: checkHotelsIsFavorite(action.payload, state.favoritesHotels)
            }

        case ADD_HOTELS_DONE:
            return {
                ...state,
                hotels: getUniqueHotels([...action.payload, ...state.hotels,]),
            }

        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }

        case SORT_FAVORITES_HOTELS:
            return {
                ...state,
                favoritesHotels: sortFavoritesHotels(state.favoritesHotels, action.payload)
            }

        case ADD_FAVORITE_HOTEL:
            return {
                ...state,
                hotels: changeIsFavorite(state.hotels, action.payload.id),
                favoritesHotels: sortFavoritesHotels([...state.favoritesHotels, action.payload], state.sortBy)
            }

        case DELETE_FAVORITE_HOTEL:
            return {
                ...state,
                hotels: changeIsFavorite(state.hotels, action.payload),
                favoritesHotels: [...state.favoritesHotels].filter(hotel => hotel.id !== action.payload)
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state
    }
}

export const setSearchData = searchData => ({type: SET_SEARCH_DATA, payload: searchData})

export const setHotelsDone = hotels => ({type: SET_HOTELS_DONE, payload: hotels})

export const addHotelsDone = hotels => ({type: ADD_HOTELS_DONE, payload: hotels})

export const setSortBy = sortBy => ({type: SET_SORT_BY, payload: sortBy})

export const creatorSortFavoritesHotels = sortBy => ({type: SORT_FAVORITES_HOTELS, payload: sortBy})

export const addFavoriteHotel = hotel => ({type: ADD_FAVORITE_HOTEL, payload: hotel})

export const deleteFavoriteHotel = hotelId => ({type: DELETE_FAVORITE_HOTEL, payload: hotelId})

export const setIsLoading = isLoading => ({type: IS_LOADING, payload: isLoading})