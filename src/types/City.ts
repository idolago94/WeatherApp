export type City = {
    name: string
    continent: string
    active: boolean
    country: string
    description: string
    image: string
    coords: CityCoords
}

type CityCoords = {
    lat: number
    lng: number
}