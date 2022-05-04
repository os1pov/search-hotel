const ADD_HOTELS = "ADD_HOTELS"

const initState = {
    hotels: []
}

export const hotelReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_HOTELS:
            return {
                ...state,
                hotels: [...state.hotels, ...action.payload]
            }

        default:
            return state
    }
}

export const addHotels = hotels => ({type: ADD_HOTELS, payload: hotels})