import axios from 'axios'

const URL = "http://engine.hotellook.com/api/v2/cache.json"

export const getHotels = async (payload) => {
    try {
        const {location, checkIn, checkOut} = payload
        const {data} = await axios.get(URL + `?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&limit=${10}&currency=rub`)
        return data
    } catch (e) {

    }
}