export enum WEATHER_QUERY_KEYS {
    LAT = '{lat}',
    LNG = '{lon}',
    API_KEY = '{api-key}'
}
export const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api-key}&units=standard"

export const WEATHER_CODE_KEY = "{code}"
export const WEATHER_ICON_URL = "https://openweathermap.org/img/wn/{code}@2x.png"