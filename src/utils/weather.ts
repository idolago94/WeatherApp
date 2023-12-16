import { WEATHER_CODE_KEY, WEATHER_ICON_URL, WEATHER_QUERY_KEYS, WEATHER_URL } from "@constants"
import { store } from "@store/index"
import { CityCoords } from "@types"
import { ImageSourcePropType } from "react-native"

export const getWeatherByCoords = async (coords: CityCoords) => {
    try {
        const { unit } = store.getState().weather
        const url = WEATHER_URL
            .replace(WEATHER_QUERY_KEYS.API_KEY, "9c4e470dc909fbefc43d1277050d3aa3") // supposed to be in .env
            .replace(WEATHER_QUERY_KEYS.LNG, coords.lng.toString())
            .replace(WEATHER_QUERY_KEYS.LAT, coords.lat.toString())
            .replace(WEATHER_QUERY_KEYS.UNIT, unit)
        const res = await fetch(url)
        const jsonRes = await res.json()
        if (jsonRes.code == 200 || jsonRes.cod == 200) return jsonRes
        else throw jsonRes
    } catch (err) {
        throw err
    }
}

export const getWeatherIconSource = (code: string): ImageSourcePropType => ({ uri: WEATHER_ICON_URL.replace(WEATHER_CODE_KEY, code) })