import axios from 'axios'

const URL = "http://engine.hotellook.com/api/v2/cache.json"

export const getHotels = async (payload) => {
    try {
        const {location, checkIn, checkOut, daysNumber} = payload
        const {data} = await axios.get(URL + `?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&limit=${10}&currency=rub`)

        const hotel = data.map(hotel => ({
            id: hotel.hotelId,
            name: hotel.hotelName,
            stars: hotel.stars,
            price: Math.round(hotel.priceFrom / 100) * 100,
            checkInDate: checkIn,
            daysNumber,
            isFavorite: false
        }))

        return hotel
    } catch (e) {
        return []
    }
}