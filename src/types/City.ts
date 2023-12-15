export type City = {
    name: string
    continent: string
    active: boolean
    country: string
    description: string
    image: string
    coords: CityCoords
}

export type CityCoords = {
    lat: number
    lng: number
}