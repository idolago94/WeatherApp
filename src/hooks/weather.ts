
import { useEffect, useState } from "react"
import { CityCoords, WeatherData } from "@types"
import { getWeatherByCoords } from "@utils"

type UseWeatherResult = {
    isLoading: boolean
    weather: WeatherData | null
    error: any
}

export const useWeather = (coords: CityCoords): UseWeatherResult => {
    const [isLoading, setLoadingState] = useState(true)
    const [weather, setWeatherData] = useState<WeatherData | null>(null)
    const [error, setError] = useState(null)

    useEffect(() => { fetchWeather() }, [coords])

    const fetchWeather = async () => {
        try {
            setLoadingState(true)
            if (!coords) throw new Error("coords is empty")
            const data: WeatherData = await getWeatherByCoords(coords)
            setWeatherData(data)
            setError(null)
        } catch (err: any) {
            setError(err)
        } finally {
            setLoadingState(false)
        }
    }

    return {
        isLoading,
        weather,
        error
    }
}