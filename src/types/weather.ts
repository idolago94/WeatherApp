export type WeatherData = {
    weather: WeatherDetails[]
    main: MainDetails
}

type WeatherDetails = {
    description: string
    icon: string
    id: number
    main: string
}

type MainDetails = {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number

}